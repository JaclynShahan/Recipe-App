import React, {Component} from 'react';
import {Collapse, Descriptions} from 'antd';
import {connect} from 'react-redux';

class RecipesList extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        console.log(this.props)
    const panelList = this.props.main.recipes.map((rec) => {
        return(
            <Collapse.Panel 
                 header={rec.title}
                 key={rec.id}
                >
                <Descriptions column={1}>
                    <Descriptions.Item layout="vertical" label="ingredients">{rec.ingredients}</Descriptions.Item>
                    <Descriptions.Item layout="vertical" label="directions">{rec.directions}</Descriptions.Item>
                </Descriptions>
            </Collapse.Panel>
        )
    })
        return(
            <div>

              <Collapse>
              {panelList}
              </Collapse>  

                
            </div>
        )
    }
}
const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps) (RecipesList);