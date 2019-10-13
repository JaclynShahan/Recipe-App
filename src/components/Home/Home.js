import React, {Component} from 'react';
import Header from './childComponents/Header';
import RecipesList from './childComponents/RecipesList';
import Axios from 'axios';
import { connect } from 'react-redux';

class Home extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    componentDidMount = () => {
        Axios.get(`/api/getRecipes`).then(resp => {
            console.log(resp)
            this.props.setRecipeList(resp.data)
        })
    
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Header />
                <RecipesList />
                
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
export default connect(mapStateToProps, mapDispatchToProps) (Home);