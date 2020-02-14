import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getFix,getTable,getHighlight} from './redux-stuffs/Actions/callAction'

//components
import Header from './components/header_footer/Header'
import CombineHome from './components/Index'


class App extends Component {

  componentDidMount(){
      // this.props.getFix().then(res=> console.log(res))
      // this.props.getTable().then(res => console.log(res))
      // this.props.getHighlight().then(res => console.log(res))
  }
  render() {
    return (
      <div>
        <Header />
        <CombineHome />
      </div>
    )
  }
}


export default connect(null,{getFix,getTable,getHighlight})(App);
