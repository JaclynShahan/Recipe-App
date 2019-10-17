import React, {Component} from 'react';
import {Collapse, Descriptions, Button, Icon, Modal, Input} from 'antd';
import {connect} from 'react-redux';
import Axios from 'axios';
import EditModal from './EditModal.js';

class RecipesList extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    onDelete = (id) => {
        Axios.delete(`/api/deleteRecipe/${id}`).then(resp => {
            console.log(resp)
            this.props.setRecipeList(resp.data)
        })
    }

    onSaveEdit = (ing, dir, id) => {
        Axios.put(`/api/updateRecipe`, {
            ingredients: ing,
            directions:dir,
            id: id
        }).then(resp => {
            console.log(resp)
            this.props.setRecipeList(resp.data)
        })
    }

    render() {
        console.log(this.props)
    const panelList = this.props.main.recipes.map((rec) => {
        return(
            <Collapse.Panel
                className="collapsePanels" 
                 header={rec.title}
                 key={rec.id}
                >
                <Descriptions column={1}>
                    <Descriptions.Item layout="vertical" label="ingredients">{rec.ingredients}</Descriptions.Item>
                    <Descriptions.Item layout="vertical" label="directions">{rec.directions}</Descriptions.Item>
                </Descriptions>
                <Button 
                className="deleteButton" 
                onClick={() => this.onDelete(rec.id)}><Icon type="delete"></Icon></Button>
                <Button 
                className="editButton"
                onClick={() => this.props.setEditModal(true)}
                ><Icon type="edit"></Icon></Button>
                <Modal
                okText=""
                title="Edit Recipe"
                onCancel={() => this.props.setEditModal(false)}
                visible={this.props.main.editModal}
                footer={[]}
                >
               <EditModal 
                ingredients={rec.ingredients}
                directions={rec.directions}
                id={rec.id}
                onSave={this.onSaveEdit}
               />
                </Modal>
            </Collapse.Panel>
        )
    })
        return(
            <div>

              <Collapse >
              {panelList}
              </Collapse> 
    

                
            </div>
        )
    }
}
const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
    setRecipeList(arr) {
        dispatch({
            type: "RECIPE_LIST",
            payload: arr
        })
    },
    setEditModal(val) {
        dispatch({
            type: "EDIT_MODAL",
            payload: val
        })
    }
   
    
})

export default connect(mapStateToProps, mapDispatchToProps) (RecipesList);