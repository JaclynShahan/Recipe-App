import React, { Component } from 'react'
import { Collapse, Descriptions, Button, Icon, Modal, Input } from 'antd'
import { connect } from 'react-redux'
import Axios from 'axios'
import EditModal from './EditModal.js'

class RecipesList extends Component {
  constructor () {
    super()
    this.state = {

    }
  }

  onDelete = id => {
    Axios.delete(`/api/deleteRecipe/${id}`).then(resp => {
      console.log(resp)
      this.props.setRecipeList(resp.data)
    })
  }

  onSaveEdit = (ing, dir, id, title) => {
    Axios.put(`/api/updateRecipe`, {
      ingredients: ing,
      directions: dir,
      id: id,
      title: title
    }).then(resp => {
      console.log(resp)
      this.props.setEditModal(false)
      this.props.setRecipeList(resp.data)
    })
  }

  openEdit = () => {
    const {recipe} = this.props
        //putting recipe in editModal reducer
        this.props.setInspected(recipe)
        this.props.setEditModal(true) //showing modal
  }

  render () {
      let styles = {
          textAlign: "left"
      }
     //const {ingredients, id, title, directions} = editModal;
    // you're double mapping here
    // you're mapping over Recipes here and ALSO in Home
    // // #TODO so delete this map, and just return and bring everything in on props (and add title)
    return (
      <div>
        <Collapse>
          <Collapse.Panel
            className='collapsePanels'
            header={this.props.title} // #TODO import this in on props
            key={this.props.id} // #TODO  this is already coming in on props
          >
            <Descriptions style={styles} column={1}>
              {/* // #TODO These 2 descriptions are coming in on props */}
              <Descriptions.Item layout='vertical'>
                 <header>Ingredients:</header>

                 <pre>{this.props.ingredients}</pre>
              </Descriptions.Item>
              <Descriptions.Item layout='vertical'>
                  <header>Directions:</header>

                 <pre>{this.props.directions}</pre>
              </Descriptions.Item>
            </Descriptions>
            <Button
              className='deleteButton'
              // #TODO  this id below is already coming in on props
              onClick={() => this.onDelete(this.props.id)}
            >
              <Icon type='delete' />
            </Button>
            <Button
              className='editButton'
              onClick={() => this.openEdit()}
            >
              <Icon type='edit' />
            </Button>
            <Modal
              okText=''
              title='Edit Recipe'
              // #TODO indent your code, don't be lazy, it shows up
              // this way in GITHUB!!! People see this. Recruiters
              // see this. Hiring managers see this. It's not okay.
              // #TODO Install prettier or beautify extensions
              // in VS CODE to help with indentation "on save"
              onCancel={() => this.props.setEditModal(false)}
              visible={this.props.main.editModal}
              footer={[]}
              //destroyOnClose={true}
            >
              <EditModal
                // title={this.props.editModal.title}
                // ingredients={this.props.editModal.ingredients} // #TODO  these 3 are coming in on props already
                // directions={this.props.editModal.directions}
                // id={this.props.editModal.id}
                onSave={this.onSaveEdit}
              />
            </Modal>
          </Collapse.Panel>
        </Collapse>
      </div>
    )
  }
}
const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  setRecipeList (arr) {
    dispatch({
      type: 'RECIPE_LIST',
      payload: arr
    })
  },
  setEditModal (val) {
    dispatch({
      type: 'EDIT_MODAL',
      payload: val
    })
  },
  setInspected (recipe) {
      dispatch({
          type: "SET_EDIT_RECIPE",
          payload: recipe
      })
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesList)
