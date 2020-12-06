import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { faExclamationCircle, faBorderNone, faEdit } from '@fortawesome/free-solid-svg-icons';
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
        title: '',
        description: '',
        platform_id: '',
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.backend.issues.issue && prevState.title === '') {
            const { backend: { issues: { issue } } } = nextProps;
            return updateObject(prevState, { ...issue });
        }
        return prevState;
    }

    async componentDidMount() {
        this.props.reset();
        this.props.get(this.props.match.params.issueId);
    }

    componentWillUnmount() {
        this.props.reset();
    }

    submitHandler = async e => {
        e.preventDefault();
        await this.props.patch(this.props.match.params.issueId, e.target);
    }

    inputChangeHandler = e => {
        const { name, value, files } = e.target;
        this.setState({ [name]: files ? files[0] : value });
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { form: { save } }, backend: { pages: { issues: { title, edit, index, form } } } }
                }
            },
            backend: { issues: { loading, error, message, platforms } },
            auth: { data: { role: { features } } }
        } = this.props;
        let { title: title_, description, platform_id } = this.state;
        let content = null;
        let errors = null;

        const feature = features.find(f => f.prefix === 'issues');
        const redirect = !(feature && JSON.parse(feature.permissions).includes('u')) && <Redirect to="/user/dashboard" />;
        
        if (!platforms) platforms = [];
        const platformsOptions = platforms.sort((a, b) => a.name > b.name).map(item => <option key={JSON.stringify(item)} value={item.id}>{item.name}</option>);

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
                        <Form onSubmit={this.submitHandler} icon={faExclamationCircle} title={edit} list={index} link="/user/issues" innerClassName="row" className="shadow-sm">
                            <Col lg={8}>
                                <Feedback message={message} />
                                <Row>
                                    <input type="hidden" name="_method" defaultValue="PATCH" />

                                    <FormInput type="text" className="col-md-6" icon={faExclamationCircle} onChange={this.inputChangeHandler} value={title_} name="title" required placeholder={form.title} />
                                    <FormInput className="col-lg-6" type="select" name="platform_id" placeholder={form.platform} onChange={this.inputChangeHandler} icon={faBorderNone} validation={{ required: true }} required value={platform_id}>
                                        <option>{form.select_platform}</option>
                                        {platformsOptions}
                                    </FormInput>
                                    <FormInput type="text" className="col-md-12" icon={faEdit} onChange={this.inputChangeHandler} value={description} name="description" required placeholder={form.description} />

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
                    <Breadcrumb items={[{ to: '/user/issues', content: index }]} main={edit} icon={faExclamationCircle} />
                    <SpecialTitle user icon={faExclamationCircle}>{title}</SpecialTitle>
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
    get: id => dispatch(actions.getIssue(id)),
    patch: (id, data) => dispatch(actions.patchIssues(id, data)),
    reset: () => dispatch(actions.resetIssues()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));