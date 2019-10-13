import React, {Component} from 'react';
import Header from './childComponents/Header';

class Home extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Header />
            
                
            </div>
        )
    }
}

export default Home;