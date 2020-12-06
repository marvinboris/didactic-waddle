import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Row, FormGroup } from 'reactstrap';
import { faUserTie, faUser, faMoneyBillWave, faPlusCircle, faUsers, faLock, faEnvelope, faCity, faPhone, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faBuilding, faSave, faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import Error from '../../../../components/Error/Error';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';
import Form from '../../../../components/Backend/UI/Form/Form';
import FormInput from '../../../../components/Backend/UI/Input/Input';
import FormButton from '../../../../components/UI/Button/BetweenButton/BetweenButton';
import Feedback from '../../../../components/Feedback/Feedback';

import * as actions from '../../../../store/actions';

class Add extends Component {
    state = {
        name: '',
        phone: '',
        photo: null,
        email: '',
        password: '',
        password_confirmation: '',
    }

    async componentDidMount() {
        this.props.reset();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    submitHandler = async e => {
        e.preventDefault();
        await this.props.post(e.target);
    }

    inputChangeHandler = e => {
        const { name, value, checked, files } = e.target;
        this.setState({ [name]: files ? files[0] : value });
    }

    fileUpload = () => document.getElementById('photo').click()

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { form: { save, selected_file } }, backend: { pages: { admins: { title, add, index, form } } } }
                }
            },
            backend: { admins: { loading, error, message } }
        } = this.props;
        let { name, phone, photo, email, password, password_confirmation } = this.state;
        let content;
        let errors = null;

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;
            content = (
                <>
                    <Row>
                        <Form onSubmit={this.submitHandler} icon={faUserTie} title={add} list={index} link="/admin/admins" innerClassName="row" className="shadow-sm">
                            <Col lg={8}>
                                <Feedback message={message} />
                                <Row>
                                    <FormInput type="text" className="col-md-6" icon={faUser} onChange={this.inputChangeHandler} value={name} name="name" required placeholder={form.name} />
                                    <FormInput type="tel" className="col-md-6" addon={<span className="text-secondary text-small">+237</span>} onChange={this.inputChangeHandler} value={phone} name="phone" required placeholder={form.phone} />
                                    <FormInput type="password" className="col-md-6" icon={faLock} onChange={this.inputChangeHandler} value={password} name="password" required placeholder={form.password} />
                                    <FormInput type="password" className="col-md-6" icon={faLock} onChange={this.inputChangeHandler} value={password_confirmation} required name="password_confirmation" placeholder={form.password_confirmation} />
                                    <FormInput type="email" className="col-md-6" icon={faEnvelope} onChange={this.inputChangeHandler} value={email} name="email" required placeholder={form.email} />

                                    <input type="file" id="photo" name="photo" className="d-none" onChange={this.inputChangeHandler} accept=".png,.jpg,.jpeg" />

                                    <div className="col-12">
                                        <FormButton color="green" icon={faSave}>{save}</FormButton>
                                    </div>
                                </Row>
                            </Col>

                            <Col lg={4}>
                                <div className="embed-responsive embed-responsive-1by1 bg-soft border border-light d-flex justify-content-center align-items-center w-60 mx-auto" style={{ cursor: 'pointer' }} onClick={this.fileUpload}>
                                    {photo && <div className="text-center text-green">
                                        <div><FontAwesomeIcon icon={faCheckCircle} fixedWidth size="5x" /></div>
                                        <div className="mt-3">{selected_file}</div>
                                    </div>}
                                </div>
                            </Col>
                        </Form>
                    </Row>
                </>
            );
        }

        return (
            <>
                <div className="bg-soft py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb main={add} icon={faUserTie} />
                    <SpecialTitle user icon={faUserTie}>{title}</SpecialTitle>
                    <Subtitle user>{add}</Subtitle>
                </div>
                <div className="p-4 pb-0">
                    {errors}
                    {content}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    post: data => dispatch(actions.postAdmins(data)),
    reset: () => dispatch(actions.resetAdmins()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));