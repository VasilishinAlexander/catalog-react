import React from 'react'
import {withRouter} from 'react-router-dom' 
import {connect} from 'react-redux'
import {logout} from '../actions/UserActions'
class Logout extends React.Component {
  componentWillMount () {
    this.props.logout();
    this.props.history.push('/')
  }
  render () {
    return (
      <div>
        Logout
      </div>
    )
  }
}
export default withRouter(connect(null, {logout})(Logout))