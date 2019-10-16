import React, {Component} from 'react';
import {Collapse, Descriptions, Button, Icon} from 'antd';
import {connect} from 'react-redux';
import Axios from 'axios';
import './Header.css';

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
                <Button onClick={() => this.onDelete(rec.id)}><Icon type="delete"></Icon></Button>
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
    }
    
})

export default connect(mapStateToProps, mapDispatchToProps) (RecipesList);