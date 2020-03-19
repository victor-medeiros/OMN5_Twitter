import React, { Component } from 'react';

import './Login.css';
import twitterLogo from '../twitter.svg';

export default class Login extends Component {
    state = {
        username: ''
    };

    handleSubit = e => {
        const { username } = this.state;

        if (!username) return;

        localStorage.setItem('@GoTwitter:username', username);
        this.props.history.push('/timeline');
    }

    handleInputChange = e => {
        this.setState({ username: e.target.value })
    }
  
    render() {
    return (
        <div className="login-wrapper">
            <img src={twitterLogo} alt="GoTwitter"/>
            <form onSubmit={this.handleSubit}>
                <input type="text"
                    placeholder="Nome de usuário"
                    onChange={this.handleInputChange}
                    value={this.state.username}
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
  }
}
