import React, { Component } from 'react';
import './App.css';
import Main from "./Components/Main/Main";
import Selection from "./Components/Selection/Selection";

class App extends Component {
    state = {
        ex: "ex"
    }

    fun = (content) => {
        this.setState({ex: content})
    }

    render() {
        return (
            <div className="App">
                <h1> UTSTILLINGSTITTEL </h1>
                <Main fun={this.fun} ex={this.state.ex}></Main>
                <Selection></Selection>
            </div>
        );
    }
}

export default App;
