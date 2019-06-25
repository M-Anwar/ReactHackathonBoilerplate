import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

// Assets 
import logo from '../css/logo.svg';
import '../css/App.css';

//Actions
import { actions as loadHomeActions } from "../reducers/reducer-home";

class Home extends React.Component {

    componentDidMount() {
    this.props.loadHome();    
    }

    render() {   
        const {message} = this.props.home
        return (      
            <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer">
                    {message}
                </a>
            </header>
            </div>
        )    
    }
}

// Map Redux State and Actions to component props
function mapStateToProps(state) {
  return {
    home: state.home
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...loadHomeActions
    },
    dispatch
  )
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);