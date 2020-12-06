import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Row, FormGroup, CustomInput } from 'reactstrap';
import { faUserTag, faEdit } from '@fortawesome/free-solid-svg-icons';
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
        description: '',
        features: []
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.backend.roles.role && prevState.name === '') {
            const { backend: { roles: { role } } } = nextProps;
            return updateObject(prevState, { ...role });
        }
        return prevState;
    }

    async componentDidMount() {
        this.props.reset();
        this.props.get(this.props.match.params.roleId);
    }

    componentWillUnmount() {
        this.props.reset();
    }

    submitHandler = async e => {
        e.preventDefault();
        await this.props.patch(this.props.match.params.roleId, e.target);
    }

    inputChangeHandler = e => {
        const { id, name, value, checked, files } = e.target;
        if (name.includes('features')) {
            let features = [...this.state.features];

            if (name.includes('id')) {
                const [, feature_id] = id.split('-');
                const feature = features.find(f => +f.id === +feature_id);

                if (checked && !feature) features.push({ id: feature_id, permissions: [] });
                else features = features.filter(f => +f.id !== +feature_id);
            } else if (name.includes('permissions')) {
                const [, feature_id, abbr] = id.split('-');
                const featureIndex = features.findIndex(f => +f.id === +feature_id);
                const feature = features[featureIndex];
                let permissions = [...feature.permissions];
                const found = permissions.includes(abbr);

                if (checked && !found) permissions.push(abbr);
                else permissions = permissions.filter(p => p !== abbr);

                feature.permissions = permissions;
                features[featureIndex] = feature;
            }

            return this.setState({ features });
        }
        this.setState({ [name]: files ? files[0] : value });
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { form: { save } }, backend: { pages: { roles: { title, edit, index, form } } } }
                }
            },
            backend: { roles: { loading, error, message, features } }
        } = this.props;
        let { name, description, features: f } = this.state;
        let content = null;
        let errors = null;

        if (!features) features = [];

        const featuresItems = features.sort((a, b) => a.name > b.name).map(feature => {
            const element = f.find(i => +i.id === +feature.id);

            const permissions = [{ abbr: 'c', name: form.create }, { abbr: 'u', name: form.update }, { abbr: 'd', name: form.delete }].map(p => {
                const checked = element && element.permissions.includes(p.abbr);

                return <Col key={JSON.stringify(p)} lg={4}>
                    <FormGroup>
                        <CustomInput type="checkbox" id={`feature-${feature.id}-${p.abbr}`} checked={checked} name={`features[${feature.id}][permissions][${p.abbr}]`} onChange={this.inputChangeHandler} label={p.name} />
                    </FormGroup>
                </Col>
            });

            const checked = element !== undefined;

            return <div key={JSON.stringify(feature)}>
                <CustomInput type="switch" id={`feature-${feature.id}`} className="col-12 pb-2" checked={checked} name={`features[${feature.id}][id]`} onChange={this.inputChangeHandler} label={<span className="text-500">{feature.name}</span>} />

                {checked && <Row>{permissions}</Row>}
            </div>
        });

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
                        <Form onSubmit={this.submitHandler} icon={faUserTag} title={edit} list={index} link="/admin/roles" innerClassName="row" className="shadow-sm">
                            <Col lg={8}>
                                <Feedback message={message} />
                                <Row>
                                    <input type="hidden" name="_method" defaultValue="PATCH" />

                                    <FormInput type="text" className="col-md-6" icon={faUserTag} onChange={this.inputChangeHandler} value={name} name="name" required placeholder={form.name} />
                                    <FormInput type="text" className="col-md-6" icon={faEdit} onChange={this.inputChangeHandler} value={description} name="description" required placeholder={form.description} />

                                    <Col xs={12} className="pb-2 text-large text-700">{form.features}</Col>
                                    <FormGroup className="col-12">
                                        {featuresItems}
                                    </FormGroup>

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
                    <Breadcrumb items={[{ to: '/admin/roles', content: index }]} main={edit} icon={faUserTag} />
                    <SpecialTitle user icon={faUserTag}>{title}</SpecialTitle>
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
    get: id => dispatch(actions.getRole(id)),
    patch: (id, data) => dispatch(actions.patchRoles(id, data)),
    reset: () => dispatch(actions.resetRoles()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));