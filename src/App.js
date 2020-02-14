import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getFix,getTable,getHighlight} from './redux-stuffs/Actions/callAction'


class App extends Component {

  componentDidMount(){
      this.props.getFix().then(res=> console.log(res))
      this.props.getTable().then(res => console.log(res))
      this.props.getHighlight().then(res => console.log(res))
  }
  render() {
    return (
      <div>
        hello
      </div>
    )
  }
}


export default connect(null,{getFix,getTable,getHighlight})(App);
