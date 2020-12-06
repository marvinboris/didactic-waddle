import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { faUser, faLock, faEnvelope, faPhone, faUserTag, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-regular-svg-icons';
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
import { updateObject } from '../../../../shared/utility';

class Add extends Component {
    state = {
        name: '',
        phone: '',
        photo: null,
        email: '',
        password: '',
        password_confirmation: '',
        role_id: '',
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.backend.users.user && prevState.name === '') {
            const { backend: { users: { user } } } = nextProps;
            return updateObject(prevState, { ...user });
        }
        return prevState;
    }

    async componentDidMount() {
        this.props.reset();
        this.props.get(this.props.match.params.userId);
    }

    componentWillUnmount() {
        this.props.reset();
    }

    submitHandler = async e => {
        e.preventDefault();
        await this.props.patch(this.props.match.params.userId, e.target);
    }

    inputChangeHandler = e => {
        const { name, value, files } = e.target;
        this.setState({ [name]: files ? files[0] : value });
    }

    fileUpload = () => document.getElementById('photo').click()

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { form: { save, selected_file } }, backend: { pages: { users: { title, edit, index, form } } } }
                }
            },
            backend: { users: { loading, error, message, roles, user } }
        } = this.props;
        let { name, phone, photo, email, password, password_confirmation, role_id } = this.state;
        let content;
        let errors = null;

        if (!roles) roles = [];
        const rolesOptions = roles.sort((a, b) => a.name > b.name).map(role => <option key={JSON.stringify(role)} value={role.id}>{role.name}</option>);

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
                        <Form onSubmit={this.submitHandler} icon={faUser} title={edit} list={index} link="/admin/users" innerClassName="row" className="shadow-sm">
                            <Col lg={8}>
                                <Feedback message={message} />
                                <Row>
                                    <input type="hidden" name="_method" defaultValue="PATCH" />

                                    <FormInput type="text" className="col-md-6" icon={faUser} onChange={this.inputChangeHandler} value={name} name="name" required placeholder={form.name} />
                                    <FormInput type="tel" className="col-md-6" icon={faPhone} onChange={this.inputChangeHandler} value={phone} name="phone" required placeholder={form.phone} />
                                    <FormInput type="password" className="col-md-6" icon={faLock} onChange={this.inputChangeHandler} value={password} name="password" placeholder={form.password} />
                                    <FormInput type="password" className="col-md-6" icon={faLock} onChange={this.inputChangeHandler} value={password_confirmation} name="password_confirmation" placeholder={form.password_confirmation} />
                                    <FormInput type="email" className="col-md-6" icon={faEnvelope} onChange={this.inputChangeHandler} value={email} name="email" placeholder={form.email} />
                                    <FormInput className="col-lg-6" type="select" name="role_id" placeholder={form.role} onChange={this.inputChangeHandler} icon={faUserTag} validation={{ required: true }} required value={role_id}>
                                        <option>{form.select_role}</option>
                                        {rolesOptions}
                                    </FormInput>

                                    <input type="file" id="photo" name="photo" className="d-none" onChange={this.inputChangeHandler} accept=".png,.jpg,.jpeg" />

                                    <div className="col-12">
                                        <FormButton color="green" icon={faSave}>{save}</FormButton>
                                    </div>
                                </Row>
                            </Col>

                            <Col lg={4}>
                                <div className="embed-responsive embed-responsive-1by1 bg-soft border border-light d-flex justify-content-center align-items-center w-60 mx-auto" style={{ cursor: 'pointer', background: photo && `url("${photo}") no-repeat center`, backgroundSize: 'cover' }} onClick={this.fileUpload}>
                                    {photo && (photo !== user.photo) && <div className="text-center text-green">
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
                    <Breadcrumb items={[{ to: '/admin/users', content: index }]} main={edit} icon={faUser} />
                    <SpecialTitle user icon={faUser}>{title}</SpecialTitle>
                    <Subtitle user>{edit}</Subtitle>
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
    get: id => dispatch(actions.getUser(id)),
    patch: (id, data) => dispatch(actions.patchUsers(id, data)),
    reset: () => dispatch(actions.resetUsers()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));