import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Input} from 'antd';

class Search extends Component {
    constructor() {
        super()
        this.state = {
            searchRec: ""
        }
    }

    onSearch = () => {
        if (this.state.searchRec.length > 0) {
            const filterRecipe = this.props.main.recipes.filter(recipe => {
                if (
                    recipe.ingredients
                    .toLowerCase()
                    .includes(this.state.searchRec.toLowerCase()) ||
                    recipe.directions
                    .toLowerCase()
                    .includes(this.state.searchRec.toLowerCase())
                ) {
                    return true
                } else {
                    return false
                }
            })
            console.log("Filtered Recipe",filterRecipe)
            this.props.setSearchRecipe(filterRecipe)
        }
        else {
            this.props.setSearchRecipe([])
        }
    }

    onKey = e => {
        const key = e.keyCode || e.which
        if (key == 13) {
            this.onSearch()
        }
    }


    render() {
        let searchStyles = {
            width: 300
        }
        const {searchRec} = this.state
        return (
            <div>
            <Input.Search 
            style={searchStyles}
            placeholder="Search for recipes..."
            value={searchRec}
            onChange={e => this.setState({searchRec: e.target.value})}
            onKey={e => this.onKey(e)}
            onClick={() => this.onSearch()}
            />

            </div>
        )
    }
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
    setSearchRecipe(arr) {
        dispatch({
            type: "SEARCH_RECIPES",
            payload: arr
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);
