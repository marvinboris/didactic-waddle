import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
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

class Edit extends Component {
    state = {
        name: '',
        abbr: '',
        flag: '',

        countries: [],
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.backend.languages.language && prevState.name === '') {
            const { backend: { languages: { language } } } = nextProps;
            return updateObject(prevState, { ...language });
        }
        return prevState;
    }

    async componentDidMount() {
        this.props.reset();
        this.props.get(this.props.match.params.languageId);

        const cors = 'https://cors-anywhere.herokuapp.com/';

        const phoneRes = await fetch(cors + 'http://country.io/phone.json', { method: 'GET', mode: 'cors' });
        const namesRes = await fetch(cors + 'http://country.io/names.json', { method: 'GET', mode: 'cors' });

        const phone = await phoneRes.json();
        const names = await namesRes.json();

        const countries = Object.keys(phone).map(key => ({ country: key, code: phone[key], name: names[key] })).sort((a, b) => (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0);

        this.setState({ countries });
    }

    componentWillUnmount() {
        this.props.reset();
    }

    submitHandler = async e => {
        e.preventDefault();
        await this.props.patch(this.props.match.params.languageId, e.target);
    }

    inputChangeHandler = e => {
        const { name, value, files } = e.target;
        this.setState({ [name]: files ? files[0] : value });
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { form: { save } }, backend: { pages: { languages: { title, edit, index, form } } } }
                }
            },
            backend: { languages: { loading, error, message } }
        } = this.props;
        let { name, abbr, flag, countries } = this.state;
        let content = null;
        let errors = null;

        const countriesOptions = countries.map(({ country, code, name }) => <option key={country} value={country} code={code}>{name}</option>);

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
                        <Form onSubmit={this.submitHandler} icon={faLanguage} title={edit} list={index} link="/admin/languages" innerClassName="row" className="shadow-sm">
                            <Col lg={8}>
                                <Feedback message={message} />
                                <Row>
                                    <input type="hidden" name="_method" defaultValue="PATCH" />

                                    <FormInput type="text" className="col-md-6" icon={faLanguage} onChange={this.inputChangeHandler} value={name} name="name" required placeholder={form.name} />
                                    <FormInput type="text" className="col-md-6" icon={faLanguage} onChange={this.inputChangeHandler} value={abbr} name="abbr" required placeholder={form.abbr} />
                                    <FormInput className="col-md-6" type="select" addon={<span className="text-secondary text-small d-inline-flex">
                                        <div className="rounded-circle overflow-hidden position-relative d-flex justify-content-center align-items-center" style={{ width: 30, height: 30 }}>
                                            <span className={`flag-icon text-xx-large position-absolute flag-icon-${flag.toLowerCase()}`} />
                                        </div>
                                    </span>} onChange={this.inputChangeHandler} value={flag} validation={{ required: true }} name="flag" required placeholder={form.select_flag}>
                                        <option>{form.select_flag}</option>
                                        {countriesOptions}
                                    </FormInput>


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
                    <Breadcrumb items={[{ to: '/admin/languages', content: index }]} main={edit} icon={faLanguage} />
                    <SpecialTitle user icon={faLanguage}>{title}</SpecialTitle>
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
    get: id => dispatch(actions.getLanguage(id)),
    patch: data => dispatch(actions.patchLanguages(data)),
    reset: () => dispatch(actions.resetLanguages()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));