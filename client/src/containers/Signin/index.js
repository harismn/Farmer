
import React, { Component } from 'react';
// import styled from 'styled-components';

class Signin extends Component {
    render() {
        return (
            <form>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <input className="form-control" name="email" component="input" type="text" />
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <input className="form-control" name="password" component="input" type="password" />
                </fieldset>
                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }
}
// const AppWrapper = styled.div
// `max-width: 90%;
//  margin:;
//  display: flex;
//  min-height: 40%;
//  padding: 1000;
//  flex-direction: column;
//  `;

export default Signin;