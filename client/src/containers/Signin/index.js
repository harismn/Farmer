
import React, { PureComponent } from 'react';
import { Field, reduxForm } from 'redux-form';
// import * as actions from '../../actions';
import { connect } from 'react-redux';

import styled from 'styled-components'

class Signin extends PureComponent {

    render() {

        return (
            <form>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <Field className="form-control" name="email" component="input" type="text" />
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <Field className="form-control" name="password" component="input" type="password" />
                </fieldset>
                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }
}

const AppWrapper = styled.div
`max-width: 90%;
 margin:;
 display: flex;
 min-height: 40%;
 padding: 1000;
 flex-direction: column;
 `;

 export default reduxForm({
    form: 'signin'
})