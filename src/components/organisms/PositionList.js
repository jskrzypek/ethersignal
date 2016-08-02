import React, { PropTypes, Component } from 'react'

import PositionListItem from './../molecules/PositionListItem'
import LoadingAnimation from './../atoms/LoadingAnimation'

import {
  ListGroup
} from 'react-bootstrap'

class PositionList extends Component {

  render() {

    return (
      <ListGroup>
        {
          this.props.positions.fetching &&
          this.props.positions.items.length === 0 &&
          <LoadingAnimation />
        }
        {
          this.props.positions.items.map((position, index) => {
            return (
              <PositionListItem
                dispatch={this.props.dispatch}
                position={position}
                key={index} />
            )
          })
        }
      </ListGroup>
    )
  }

}

PositionList.propTypes = {
  dispatch: PropTypes.func,
  positions: PropTypes.object
}

export default PositionList
