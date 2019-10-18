import React, {Component} from 'react';
import Header from './childComponents/Header';
import RecipesList from './childComponents/RecipesList';
import Axios from 'axios';
import { connect } from 'react-redux';


class Home extends Component {
    constructor() {
        super()
        this.state = {
            recipes: []
        }
    }

    componentDidMount = () => {
        Axios.get(`/api/getRecipes`).then(resp => {
            console.log(resp)
            this.props.setRecipeList(resp.data)
        })
    
    }

    render() {
       const {searchRecipes} = this.props.main
        const {recipes} = this.state
        console.log(this.props)
        return (
            <div>
                <Header />

                {searchRecipes.length > 0 
                ? searchRecipes.map(recipe => (
                    <RecipesList 
                    key={recipe.id}
                    id={recipe.id}
                    ingredients={recipe.ingredients}
                    directions={recipe.directions}
                    recipe={recipe}
                    />
                ))
              : recipes.map(recipe => (
                  <RecipesList 
                  key={recipe.id}
                  id={recipe.id}
                  ingredients={recipe.ingredients}
                  directions={recipe.directions}
                  recipe={recipe}
                  />
              ))
                  
                }
              
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
    },
    setSearchRecipe(arr) {
        dispatch({
            type: "SEARCH_RECIPES",
            payload: arr
        })
    }
})
export default connect(mapStateToProps, mapDispatchToProps) (Home);