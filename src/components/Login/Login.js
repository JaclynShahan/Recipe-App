import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Input, Button} from 'antd'
import Axios from 'axios';

class Login extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
authRequest = () => {
    Axios.post(`/api/verifyPassword`, {
        password: this.props.login.password
    }).then(resp => {
       console.log(resp.data)
       this.props.setAuthen(resp.data)
    })
}
    render() {
        console.log(this.props.login)
        return(
            <div>
                <Input 
                    placeholder="Enter Passcode"
                    onChange={(e) => this.props.setPassword(e)}
                />
                <Button onClick={this.authRequest}>Enter</Button>
            </div>
        )
    }
}


const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
    setPassword(e) {
        dispatch({
            type: "USER_PASSWORD",
            payload: e.target.value
        })
    },
    setAuthen(val) {
        dispatch({
            type: "USER_AUTH",
            payload: val
        })
    }
})
export default connect(mapStateToProps, mapDispatchToProps) (Login);