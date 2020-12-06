import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { faBorderNone, faTint } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-regular-svg-icons';

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
        color: '',
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.backend.platforms.platform && prevState.name === '') {
            const { backend: { platforms: { platform } } } = nextProps;
            return updateObject(prevState, { ...platform });
        }
        return prevState;
    }

    async componentDidMount() {
        this.props.reset();
        this.props.get(this.props.match.params.platformId);
    }

    componentWillUnmount() {
        this.props.reset();
    }

    submitHandler = async e => {
        e.preventDefault();
        await this.props.patch(this.props.match.params.platformId, e.target);
    }

    inputChangeHandler = e => {
        const { name, value, files } = e.target;
        this.setState({ [name]: files ? files[0] : value });
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { form: { save } }, backend: { pages: { platforms: { title, edit, index, form } } } }
                }
            },
            backend: { platforms: { loading, error, message } },
            auth: { data: { role: { features } } }
        } = this.props;
        let { name, color } = this.state;
        let content = null;
        let errors = null;

        const feature = features.find(f => f.prefix === 'platforms');
        const redirect = !(feature && JSON.parse(feature.permissions).includes('u')) && <Redirect to="/user/dashboard" />;

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
                        <Form onSubmit={this.submitHandler} icon={faBorderNone} title={edit} list={index} link="/user/platforms" innerClassName="row" className="shadow-sm">
                            <Col lg={8}>
                                <Feedback message={message} />
                                <Row>
                                    <input type="hidden" name="_method" defaultValue="PATCH" />

                                    <FormInput type="text" className="col-md-6" icon={faBorderNone} onChange={this.inputChangeHandler} value={name} name="name" required placeholder={form.name} />
                                    <FormInput type="text" className="col-md-6" icon={faTint} onChange={this.inputChangeHandler} value={color} name="color" required placeholder={form.color} />

                                    <div className="col-12">
                                        <FormButton color="green" icon={faSave}>{save}</FormButton>
                                    </div>
                                </Row>
                            </Col>
                        </Form>
                    </Row>
                </>
            );
        }

        return (
            <>
                <div className="bg-soft py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb items={[{ to: '/user/platforms', content: index }]} main={edit} icon={faBorderNone} />
                    <SpecialTitle user icon={faBorderNone}>{title}</SpecialTitle>
                    <Subtitle user>{edit}</Subtitle>
                </div>
                <div className="p-4 pb-0">
                    {redirect}
                    {errors}
                    {content}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: id => dispatch(actions.getPlatform(id)),
    patch: (id, data) => dispatch(actions.patchPlatforms(id, data)),
    reset: () => dispatch(actions.resetPlatforms()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));