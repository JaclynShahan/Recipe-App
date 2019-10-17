import React, {Component} from 'react';
import { Input, Button } from 'antd';

class EditModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ingredients: props.ingredients,
            directions: props.directions
        }
    }

    

    render () {
        const {ingredients, directions} = this.state;
        const {id} = this.props;
        return(
            <div>
                <Input.TextArea
                     onChange={e => this.setState({ingredients: e.target.value})}
                     value={ingredients}
                />
                <Input.TextArea 
                     onChange={e => this.setState({directions: e.target.value})}
                     value={directions}
                />
                <Button
                    onClick={() => this.props.onSave(ingredients, directions, id)}
                    type="primary">Save</Button>
            </div>

        )
    }
}

export default EditModal;