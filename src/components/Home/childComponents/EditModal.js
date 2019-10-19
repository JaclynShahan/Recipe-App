import React, {Component} from 'react';
import { Input, Button } from 'antd';
import {connect} from 'react-redux';

class EditModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
          //  ingredients: this.props.ingredients,
          //  directions: this.props.directions
        }
    }


    render () {
        const {ingredients, directions, id, title} = this.props.editModal
        //const {id} = this.props;
        return(
            <div>
                <Input.TextArea 
                onChange={e => this.props.setEditTitle(e)}
                value={this.props.editModal.title}
                />

                <Input.TextArea
                     onChange={e => this.props.setEditIngredients(e)}
                     value={this.props.editModal.ingredients}
                />
                <Input.TextArea 
                     onChange={e => this.props.setEditDirections(e)}
                     value={this.props.editModal.directions}
                />
                <Button
                    onClick={() => this.props.onSave(ingredients, directions, id, title)}
                    type="primary">Save</Button>
            </div>

        )
    }
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
    setEditDirections (e) {
        dispatch({
            type: "EDIT_DIRECTIONS",
            payload: e.target.value
        })
    },
    setEditIngredients (e) {
        dispatch({
            type: "EDIT_INGREDIENTS",
            payload: e.target.value
        })
    },
    setEditId (e) {
        dispatch({
            type: "EDIT_ID",
            payload: e.target.value
        })
    },
    setEditTitle (e) {
        dispatch({
            type: "EDIT_TITLE",
            payload: e.target.value
        })
    }
})

export default connect (mapStateToProps, mapDispatchToProps) (EditModal);