import React from 'react'
import NewReview from '../components/NewReview'
import { connect } from 'react-redux';
import { newReview } from '../actions/ProductsActions'
class NewReviewContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      current: 0,
      selected: 0,
      text: '',
      error: null,
      loading: false,
      success: null
    }
    this.hover = this.hover.bind(this);
    this.select = this.select.bind(this);
    this.out = this.out.bind(this);
    this.handleText = this.handleText.bind(this);
    this.submit = this.submit.bind(this);
  }
  select (n) {
    let selected = n === this.state.selected ? 0 : n;
    this.setState({
      selected,
      current: selected
    })
  }
  hover (n) {
    let current = this.state.selected > n ? this.state.selected : n;
    this.setState({
      current
    })
  }
  setError (error = 'Error') {
    this.setState({
      error,
      loading: false
    })
  }
  setLoading (loading = false) {
    this.setState({
      loading: loading,
      error: null
    })
  }
  out () {
    this.setState({
      current: this.state.selected
    })
  }
  submit () {
    if (!this.state.text) return this.setError('Text field is empty')
    this.setLoading(true);
    this.props.newReview({
      text: this.state.text,
      rate: this.state.current
    }, this.props.id, this.props.token).then(() => {
      this.setState({
        current: 0,
        selected: 0,
        text: '',
        error: null,
        loading: false,
        success: 'Review has been added'
      })
      setTimeout(() => {
        this.setState({
          success: null
        })
      }, 2000)
    })
  }
  handleText (text) {
    this.setState({
      text
    })
  }
  render () {
    return (
      <NewReview 
        rate={this.state.current} 
        out={this.out} 
        select={this.select} 
        hover={this.hover} 
        handleText={this.handleText} 
        text={this.state.text} 
        submit={this.submit} 
        loading={this.state.loading}
        error={this.state.error}
        success={this.state.success}
      />
    )
  }
}

export default connect(null, {newReview})(NewReviewContainer);