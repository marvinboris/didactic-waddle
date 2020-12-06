import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { faUser, faMoneyBillWave, faCheckCircle, faMoneyBillWaveAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { faSave, faCalendar } from '@fortawesome/free-regular-svg-icons';
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

class Edit extends Component {
    state = {
        amount: '',
        date: '',
        description: '',
        proof: null,
        method_id: '',
        expendable_type: '',
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.backend.expenses.expense && prevState.description === '') {
            const { backend: { expenses: { expense } } } = nextProps;
            return updateObject(prevState, { ...expense });
        }
        return prevState;
    }

    async componentDidMount() {
        this.props.reset();
        this.props.get(this.props.match.params.expenseId);
    }

    componentWillUnmount() {
        this.props.reset();
    }

    submitHandler = async e => {
        e.preventDefault();
        await this.props.patch(this.props.match.params.expenseId, e.target);
    }

    inputChangeHandler = e => {
        const { name, value, files } = e.target;
        this.setState({ [name]: files ? files[0] : value });
    }

    fileUpload = () => document.getElementById('proof').click()

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { form: { save, selected_file } }, backend: { pages: { expenses: { title, edit, index, form } } } }
                }
            },
            auth: { data: { name } },
            backend: { expenses: { loading, error, message, methods, expendables, expense } }
        } = this.props;
        let { amount, date, description, proof, method_id, expendable_type } = this.state;
        let content = null;
        let errors = null;

        if (!methods) methods = [];
        const methodsOptions = methods.sort((a, b) => a.name > b.name).map(item => <option key={JSON.stringify(item)} value={item.id}>{item.name}</option>);

        if (!expendables) expendables = [];
        const expendablesOptions = expendables.sort((a, b) => a.name > b.name).map(item => <option key={JSON.stringify(item)} value={item.id}>{item.name}</option>);

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
                        <Form onSubmit={this.submitHandler} icon={faMoneyBillWaveAlt} title={edit} list={index} link="/admin/expenses" innerClassName="row" className="shadow-sm">
                            <Col lg={8}>
                                <Feedback message={message} />
                                <Row>
                                    <input type="hidden" name="_method" defaultValue="PATCH" />

                                    <FormInput className="col-lg-6" type="select" name="expendable_type" placeholder={form.expendable_type} onChange={this.inputChangeHandler} icon={faMoneyBillWave} validation={{ required: true }} required value={expendable_type}>
                                        <option>{form.select_expendable_type}</option>
                                        {expendablesOptions}
                                    </FormInput>
                                    <FormInput type="text" className="col-md-6" icon={faUser} onChange={this.inputChangeHandler} value={name} name="name" required placeholder="Nom de l'utilisateur" readonly />
                                    <FormInput className="col-lg-6" type="select" name="method_id" placeholder={form.method} onChange={this.inputChangeHandler} icon={faMoneyBillWave} validation={{ required: true }} required value={method_id}>
                                        <option>{form.select_method}</option>
                                        {methodsOptions}
                                    </FormInput>
                                    <FormInput type="date" className="col-md-6" icon={faCalendar} onChange={this.inputChangeHandler} value={date} name="date" required placeholder={form.date} />
                                    <FormInput type="number" className="col-md-6" icon={faMoneyBillWaveAlt} onChange={this.inputChangeHandler} value={amount} name="amount" required placeholder={form.amount} />
                                    <FormInput type="text" className="col-md-6" icon={faEdit} onChange={this.inputChangeHandler} value={description} name="description" required placeholder={form.description} />

                                    <input type="file" id="proof" name="proof" className="d-none" onChange={this.inputChangeHandler} accept=".png,.jpg,.jpeg" />

                                    <div className="col-12">
                                        <FormButton color="green" icon={faSave}>{save}</FormButton>
                                    </div>
                                </Row>
                            </Col>

                            <Col lg={4}>
                                <div className="embed-responsive embed-responsive-1by1 bg-soft border border-light d-flex justify-content-center align-items-center w-60 mx-auto" style={{ cursor: 'pointer', background: proof && `url("${proof}") no-repeat center`, backgroundSize: 'cover' }} onClick={this.fileUpload}>
                                    {proof && (proof !== expense.proof) && <div className="text-center text-green">
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
                    <Breadcrumb main={edit} icon={faMoneyBillWaveAlt} />
                    <SpecialTitle user icon={faMoneyBillWaveAlt}>{title}</SpecialTitle>
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
    get: id => dispatch(actions.getExpense(id)),
    patch: (id, data) => dispatch(actions.patchExpenses(id, data)),
    reset: () => dispatch(actions.resetExpenses()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));