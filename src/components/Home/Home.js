import React, {Component} from 'react';
import Header from './childComponents/Header';
import RecipesList from './childComponents/RecipesList';
import Axios from 'axios';
import { connect } from 'react-redux';


class Home extends Component {
    constructor() {
        super()
        this.state = {
            //recipes: []
        }
    }

    componentDidMount = () => {
        Axios.get(`/api/getRecipes`).then(resp => {
            console.log(resp)
            this.props.setRecipeList(resp.data)
        })
    
    }
    whichData = () => {
        // if (this.props.main.searchRecipes.length > 0) {
            // return this.props.main.searchRecipes
        // } else {
            return this.props.main.recipes
        // }
    }
    render() {
     console.log("Hi")
        console.log(this.props)
        return (
            <div>
                <Header />

                {this.whichData().map(recipe => (
                    <RecipesList 
                    key={recipe.id}
                    id={recipe.id}
                    // you need title here too
                    title={recipe.title}
                    ingredients={recipe.ingredients}
                    directions={recipe.directions}
                    recipe={recipe}
                    />
                ))}
              
                
                
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