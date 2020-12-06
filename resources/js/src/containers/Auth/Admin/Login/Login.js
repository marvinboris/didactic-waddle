import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Form, FormGroup, Label, CustomInput, Col } from 'reactstrap';
import { faLock, faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';

import Title from '../../../../components/UI/Titles/Title/Title';
import Input from '../../../../components/UI/Input/Input';
import BetweenButton from '../../../../components/UI/Button/BetweenButton/BetweenButton';
import Error from '../../../../components/Error/Error';
import Feedback from '../../../../components/Feedback/Feedback';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';

import * as actions from '../../../../store/actions/index';

export class Login extends Component {
    state = {
        email: '',
        password: '',
        otp: 'email'
    }

    componentDidUpdate() {
        const { auth: { hash }, onSetHash, history } = this.props;
        if (hash) {
            onSetHash(hash);
            history.push('/auth/admin/verify');
        }
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.onAuth(e.target);
    }

    inputChangeHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        const { email, password } = this.state;
        const {
            content: {
                cms: {
                    pages: { auth: { admin: { login: { sign_in_to, admin_panel, sign_in, email_address, password: password_, otp_method, sms, email: email_ } } } }
                }
            },
            auth: { loading, error, message },
        } = this.props;
        let titleContent, formContent;

        titleContent = <>
            {sign_in_to} <span className="text-yellow">{admin_panel}</span>
        </>;

        formContent = <>
            <Input type="text" icon={faUser} onChange={this.inputChangeHandler} validation={{ required: true, isEmail: true }} value={email} name="email" required placeholder={email_address} />
            <Input type="password" icon={faLock} onChange={this.inputChangeHandler} validation={{ required: true }} value={password} name="password" required placeholder={password_} />

            <FormGroup className="ml-2 mt-4 mb-5 d-flex align-items-center text-dark">
                <div className='text-700 pr-4'>{otp_method}</div>
                <Label check>
                    <CustomInput type="radio" id="sms" name="otp" value="sms" label={sms} disabled inline />
                </Label>
                <Label check>
                    <CustomInput type="radio" id="email" defaultChecked name="otp" value="email" label={email_} inline />
                </Label>
            </FormGroup>

            <BetweenButton color="yellow" size="lg" className="py-3 px-4 btn-block" icon={faSignInAlt}>{sign_in}</BetweenButton>
        </>;

        const errors = <Error err={error} />;
        const feedback = <Feedback message={message} />;
        let content = null;

        if (loading) content = <div className="h-100 d-flex justify-content-center align-items-center"><CustomSpinner /></div>;
        else content = <Form onSubmit={this.submitHandler} className="row">
            <Col xl={10}>
                {formContent}
            </Col>
        </Form>;

        return <>
            <Title>
                {titleContent}
            </Title>
            {errors}
            {feedback}
            {content}
        </>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onAuth: data => dispatch(actions.authAdminLogin(data)),
    onSetHash: hash => dispatch(actions.setHash(hash))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);