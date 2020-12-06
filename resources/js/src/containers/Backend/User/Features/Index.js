import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faTools } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import List from '../../../../components/Backend/UI/List/List';
import Error from '../../../../components/Error/Error';
import Feedback from '../../../../components/Feedback/Feedback';
import Delete from '../../../../components/Backend/UI/Delete/Delete';

import * as actions from '../../../../store/actions';
import { updateObject, convertDate } from '../../../../shared/utility';

class Index extends Component {
    componentDidMount() {
        this.props.get();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { list: { action } }, backend: { pages: { features: { title, add, index, form: { name, prefix, created_at } } } } }
                }
            },
            backend: { features: { loading, error, message, features, total } },
            auth: { data: { role: { features: features_ } } }
        } = this.props;

        const feature_ = features_.find(f => f.prefix === 'features');
        const redirect = !feature_ && <Redirect to="/user/dashboard" />;

        const errors = <>
            <Error err={error} />
        </>;
        const feedback = <Feedback message={message} />;

        if (!features) features = [];
        const data = features.map(feature => {
            return updateObject(feature, {
                created_at: convertDate(feature.created_at),
                action: <div className="text-center">
                    <Link to={`/user/features/${feature.id}`} className="mx-1">
                        <FontAwesomeIcon icon={faEye} className="text-green" fixedWidth />
                    </Link>
                    {JSON.parse(feature_.permissions).includes('u') && <Link to={`/user/features/${feature.id}/edit`} className="mx-1">
                        <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                    </Link>}
                    {JSON.parse(feature_.permissions).includes('d') && <span className="mx-1"><Delete deleteAction={() => this.props.delete(feature.id)}><FontAwesomeIcon icon={faTrash} className="text-red" fixedWidth /></Delete></span>}
                </div>,
            });
        });

        const content = (
            <>
                <Row>
                    <List array={data} loading={loading} data={JSON.stringify(features)} get={this.props.get} total={total} bordered add={add} link="/user/features/add" icon={faTools} title={index} className="shadow-sm"
                        fields={[
                            { name, key: 'name' },
                            { name: prefix, key: 'prefix' },
                            { name: created_at, key: 'created_at' },
                            { name: action, key: 'action', fixed: true }
                        ]} />
                </Row>
            </>
        );

        return (
            <>
                <div className="bg-soft py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb main={index} icon={faTools} />
                    <SpecialTitle user icon={faTools}>{title}</SpecialTitle>
                    <Subtitle user>{index}</Subtitle>
                </div>
                <div className="p-4 pb-0">
                    {redirect}
                    {errors}
                    {feedback}
                    {content}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: (page, show, search) => dispatch(actions.getFeatures(page, show, search)),
    delete: id => dispatch(actions.deleteFeatures(id)),
    reset: () => dispatch(actions.resetFeatures()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));