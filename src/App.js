import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getFix,getTable,getHighlight} from './redux-stuffs/Actions/callAction';

//components
import Header from './components/header_footer/Header'
import Footer from './components/header_footer/Footer'
import CombineHome from './components/Index'


class App extends Component {
    state = {
      data: []
    }
  componentDidMount(){
     // this.props.getFix().then(res=> this.setState({data: this.props.fixture}))
      // this.props.getTable().then(res => console.log(res))
      // this.props.getHighlight().then(res => console.log(res))
  }
  render() {
    console.log(this.state.data)
    return (
      <div>
        <Header />
        <CombineHome/>
        <Footer />
      </div>
    )
  }
}


const mapStateToProps =(state) =>{
  const fixture = state.Fix.payload
  return {
      fixture
  }
}

export default connect(mapStateToProps,{getFix,getTable,getHighlight})(App);
