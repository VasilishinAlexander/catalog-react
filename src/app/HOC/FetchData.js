import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import LoadingComponent from '../components/LoadingComponent'
import ErrorComponent from '../components/ErrorComponent'
export default function FetchData(Component, options) {
  class FetchingComponent extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        loading: false,
        error: ''
      }
    }
    componentDidMount () {
      this.fetch();
    }
    fetch () {
      this.setState({
        loading: true
      })
      // additional params for functions
      let param;
      if (options.getParam) {
        param = this.props.match.params[options.getParam];
      }
      // exec function
      this.props.func(param).then(response => {
        this.setState({
          loading: false,
          error: ''
        })
      }).catch(e => {
        this.setState({
          loading: false,
          error: (e.message || 'Error')
        })
      })
    }
    render () {
      // which component should be rendered
      const willRender = this.state.loading ? <LoadingComponent /> : this.state.error ? <ErrorComponent message={this.state.error} /> : <Component />
      return willRender;
    }
  }
  const func = options.func;
  return withRouter(connect(null, {func})(FetchingComponent))
}