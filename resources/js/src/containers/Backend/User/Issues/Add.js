import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Col, Input, Row } from 'reactstrap';
import { faExclamationCircle, faEdit, faBorderNone, faFileImage, faFileVideo, faFilePdf, faFile, faPlus } from '@fortawesome/free-solid-svg-icons';
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
import { parseMoment } from '../../../../shared/utility';

class Add extends Component {
    state = {
        title: '',
        description: '',
        platform_id: '',
        files: [],
        comments: [],
        inputs: 0,
    }

    async componentDidMount() {
        this.props.reset();
        this.props.get();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.backend.issues.loading && !this.props.backend.issues.loading) {
            this.setState({
                files: [],
                comments: [],
                inputs: 0,
            });
        }
    }

    submitHandler = async e => {
        e.preventDefault();
        await this.props.post(e.target);
    }

    inputChangeHandler = e => {
        const { name, value, files, tabIndex } = e.target;
        if (name === 'files[]') {
            const { files: files_ } = this.state;
            return this.setState({ files: [...files_, files[0]] });
        }
        if (name === 'comments[]') {
            const { comments } = this.state;
            comments[tabIndex] = value;
            return this.setState({ comments }, () => {
                setTimeout(() => {
                    const element = document.getElementsByClassName('comments')[tabIndex];
                    element.focus();
                    element.selectionStart = element.selectionEnd = element.value.length;
                }, 0);
            });
        }
        this.setState({ [name]: files ? files[0] : value });
    }

    plusBtnClickedHandler = () => {
        const inputs = this.state.inputs + 1;
        this.setState({ inputs }, () => {
            const parent = document.getElementById('inputs');
            const element = document.getElementsByClassName('files')[inputs - 1];
            console.log({ inputs });
            document.body.onfocus = () => {
                console.log({ element, parent, files: element.files });
                if (element.files.length > 0) {
                    if (parent.children.length > 0) parent.removeChild(element);
                    return this.setState({ inputs: inputs - 1 }, () => {
                        document.body.onfocus = null;
                    });
                }
                document.body.onfocus = null;
            };
            element.click();
        });
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { form: { save } }, backend: { pages: { issues: { title, add, index, form } } } }
                }
            },
            backend: { issues: { loading, error, message, platforms } },
            auth: { data: { role: { features } } }
        } = this.props;
        let { title: title_, description, platform_id, files, comments, inputs } = this.state;
        let content = null;
        let errors = null;

        const feature = features.find(f => f.prefix === 'issues');
        const redirect = !(feature && JSON.parse(feature.permissions).includes('c')) && <Redirect to="/user/dashboard" />;

        const inputElements = [];
        for (let i = 0; i < inputs; i++) {
            inputElements.push(<input type="file" name="files[]" onChange={this.inputChangeHandler} accept="image/*,video/*" tabIndex={i} className="d-none files" />);
        }

        const fileElements = files.map((file, index) => {
            let icon;
            if (file.type.includes('image')) icon = faFileImage;
            else if (file.type.includes('video')) icon = faFileVideo;
            else if (file.type.includes('pdf')) icon = faFilePdf;
            else icon = faFile;

            return <Col xs={4} key={JSON.stringify(file) + Math.random()}>
                <div className="mb-3 embed-responsive embed-responsive-1by1 bg-soft rounded-4 overflow-hidden p-2 d-flex justify-content-center align-items-center position-relative">
                    <FontAwesomeIcon icon={icon} size="5x" className="text-border position-absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
                </div>

                <Input type="textarea" className="comments" name="comments[]" value={comments[index]} tabIndex={index} onChange={this.inputChangeHandler} placeholder="Type description here..." />
            </Col>;
        });

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
                        <Form onSubmit={this.submitHandler} icon={faExclamationCircle} title={add} list={index} link="/user/issues" innerClassName="row" className="shadow-sm">
                            <Col lg={8}>
                                <Feedback message={message} />
                                <Row>
                                    <FormInput type="text" className="col-md-6" icon={faExclamationCircle} onChange={this.inputChangeHandler} value={title_} name="title" required placeholder={form.title} />
                                    <FormInput className="col-lg-6" type="select" name="platform_id" placeholder={form.platform} onChange={this.inputChangeHandler} icon={faBorderNone} validation={{ required: true }} required value={platform_id}>
                                        <option>{form.select_platform}</option>
                                        {platformsOptions}
                                    </FormInput>
                                    <FormInput type="textarea" className="col-md-12" icon={faEdit} onChange={this.inputChangeHandler} value={description} name="description" required placeholder={form.description} />

                                    <Col xs={12} id="inputs">
                                        {inputElements}
                                    </Col>

                                    <Col xs={12} className="pb-3">
                                        <Button color="blue" onClick={this.plusBtnClickedHandler}>
                                            <FontAwesomeIcon icon={faPlus} size="3x" />
                                        </Button>
                                    </Col>

                                    <Col xs={12} className="pb-3">
                                        <Row>
                                            {fileElements}
                                        </Row>
                                    </Col>


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
                    <Breadcrumb main={add} icon={faExclamationCircle} />
                    <SpecialTitle user icon={faExclamationCircle}>{title}</SpecialTitle>
                    <Subtitle user>{add}</Subtitle>
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
    get: () => dispatch(actions.getIssuesInfo()),
    post: data => dispatch(actions.postIssues(data)),
    reset: () => dispatch(actions.resetIssues()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));