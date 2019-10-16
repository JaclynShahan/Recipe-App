import React, {Component} from 'react';
import { Button, Modal, Input, Icon } from 'antd';
import './Header.css';
import {connect} from 'react-redux'; 
import Axios from 'axios';

class Header extends Component {
    constructor() {
        super() 
        this.state = {

        }
    }

    onRefresh = () => {
        Axios.get(`/api/getRecipes`).then(resp => {
            console.log(resp)
            this.props.setRecipeList(resp.data)
        })
    }
    onSave = () => {
        Axios.post(`/api/createRecipe`, {
            title: this.props.newRecipe.title,
            ingredients: this.props.newRecipe.ingredients,
            directions: this.props.newRecipe.directions
        }).then(resp => console.log("Here's the response:", resp))
    }

    onClear = () => {
    
    }
    render() {
        console.log("Props: ", this.props)
        let searchStyles = {
            width: 300
        }
        let styles = {
            height: 64,
            width: "100vw",

        }
        return (
            <div style={styles} className="headerButtons">
            <Button onClick={() => this.props.setShowModal(true)}>Add Recipe</Button>
            <Input.Search 
            style={searchStyles}
            placeholder="Search for recipes..."
            />
            <Button onClick={() => this.onRefresh()}>Refresh</Button>
            <Modal
                className="modal"
                onOk={this.onSave}
                okText="Save"
                title="Add New Recipe"
                onCancel={() => this.props.setShowModal(false)}
                visible={this.props.newRecipe.showModal}
            >
            <Input 
                className="inputs"
                onChange={(e) => this.props.titleHandler(e)}
                placeholder="Title"
                value={this.props.newRecipe.title}
            />
            <Input.TextArea 
                className="inputs textAreas"
                onChange={(e) => this.props.ingredientsHandler(e)}
                placeholder="Ingredients"
                value={this.props.newRecipe.ingredients}
            />
            <Input.TextArea
            className="inputs textAreas"
                onChange={(e) => this.props.directionsHandler(e)} 
                placeholder="Directions"
                value={this.props.newRecipe.directions}
            />
            </Modal>
            </div>
        )
    }
}
//const mapStateToProps = state => state; // could also do this for map dispatch
const mapStateToProps = state => {
    console.log("state: ", state)
    return state // you could limit the props coming from redux state here
    
};
const mapDispatchToProps = dispatch => ({ // this adds functions to props
    setShowModal(val){ //we are passing in a boolean
        dispatch({
            type: "SHOW_NEW_MODAL",
            payload: val
        })
    },
    titleHandler(e){
        dispatch({
            type: "NEW_TITLE",
            payload: e.target.value
        })
    },
    directionsHandler(e){
        console.log(e)
        dispatch({
            type: "NEW_DIRECTION",
            payload: e.target.value
        })
    },
    ingredientsHandler(e){
        dispatch({
            type: "NEW_INGREDIENT",
            payload: e.target.value
        })
    },
      setRecipeList(arr) {
        dispatch({
            type: "RECIPE_LIST",
            payload: arr
        })
    }

})
export default connect(mapStateToProps, mapDispatchToProps) (Header)//connect takes 2 objects