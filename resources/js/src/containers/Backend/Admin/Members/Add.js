import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { faUserTie, faUser, faCheckCircle, faUserTag, faEdit } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-regular-svg-icons';
import { faFacebookSquare, faLinkedin, faTwitterSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
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
        first_name: '',
        last_name: '',
        job: '',
        quote: '',
        social_media: {
            facebook: '',
            linkedin: '',
            whatsapp: '',
            twitter: '',
        },
        photo: null,
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
        const { name, value, files } = e.target;
        if (name.includes('social_media')) {
            const social_media = { ...this.state.social_media };
            Object.keys(social_media).forEach(m => {
                if (name.includes(m)) social_media[m] = value;
            });
            return social_media;
        }
        this.setState({ [name]: files ? files[0] : value });
    }

    fileUpload = () => document.getElementById('photo').click()

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { form: { save, selected_file } }, backend: { pages: { members: { title, add, index, form } } } }
                }
            },
            backend: { members: { loading, error, message } }
        } = this.props;
        let { first_name, last_name, job, quote, social_media, photo } = this.state;
        let content = null;
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
                        <Form onSubmit={this.submitHandler} icon={faUserTie} title={add} list={index} link="/admin/members" innerClassName="row" className="shadow-sm">
                            <Col lg={8}>
                                <Feedback message={message} />
                                <Row>
                                    <FormInput type="text" className="col-md-6" icon={faUser} onChange={this.inputChangeHandler} value={first_name} name="first_name" required placeholder={form.first_name} />
                                    <FormInput type="text" className="col-md-6" icon={faUser} onChange={this.inputChangeHandler} value={last_name} name="last_name" required placeholder={form.last_name} />
                                    <FormInput type="text" className="col-md-6" icon={faUserTag} onChange={this.inputChangeHandler} value={job} name="job" required placeholder={form.job} />
                                    <FormInput type="textarea" className="col-md-12" icon={faEdit} onChange={this.inputChangeHandler} value={quote} name="quote" required placeholder={form.quote} />
                                    
                                    <Col xs={12} className="pb-2 text-large text-700">{form.social_media}</Col>
                                    <FormInput type="text" className="col-md-6" icon={faFacebookSquare} onChange={this.inputChangeHandler} value={social_media.facebook} name="social_media[facebook]" required placeholder="Facebook" />
                                    <FormInput type="text" className="col-md-6" icon={faLinkedin} onChange={this.inputChangeHandler} value={social_media.linkedin} name="social_media[linkedin]" required placeholder="Linkedin" />
                                    <FormInput type="text" className="col-md-6" icon={faWhatsappSquare} onChange={this.inputChangeHandler} value={social_media.whatsapp} name="social_media[whatsapp]" required placeholder="WhatsApp" />
                                    <FormInput type="text" className="col-md-6" icon={faTwitterSquare} onChange={this.inputChangeHandler} value={social_media.twitter} name="social_media[twitter]" required placeholder="Twitter" />

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
    post: data => dispatch(actions.postMembers(data)),
    reset: () => dispatch(actions.resetMembers()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));