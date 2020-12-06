import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash, faLanguage } from '@fortawesome/free-solid-svg-icons';

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
                    pages: { components: { list: { action } }, backend: { pages: { languages: { title, add, index, form: { name, abbr, flag, created_at } } } } }
                }
            },
            backend: { languages: { loading, error, message, languages, total } }
        } = this.props;

        let content;
        let errors;
        let feedback;

        feedback = <Feedback message={message} />;

        if (!languages) languages = [];

        errors = <>
            <Error err={error} />
        </>;

        const data = languages.map(language => {
            return updateObject(language, {
                created_at: convertDate(language.created_at),
                flag: <div>
                    <span className={`flag-icon flag-icon-${language.flag.toLowerCase()} mr-1`} />{language.flag}
                </div>,
                action: <div className="text-center">
                    <Link to={`/admin/languages/${language.id}`} className="mr-2">
                        <FontAwesomeIcon icon={faEye} className="text-green" fixedWidth />
                    </Link>
                    <Link to={`/admin/languages/${language.id}/edit`} className="mr-2">
                        <FontAwesomeIcon icon={faEdit} className="text-brokenblue" fixedWidth />
                    </Link>
                    <Delete deleteAction={() => this.props.delete(language.id)}><FontAwesomeIcon icon={faTrash} className="text-red" fixedWidth /></Delete>
                </div>,
            });
        });

        content = (
            <>
                <Row>
                    <List array={data} loading={loading} data={JSON.stringify(languages)} get={this.props.get} total={total} bordered add={add} link="/admin/languages/add" icon={faLanguage} title={index} className="shadow-sm"
                        fields={[
                            { name, key: 'name' },
                            { name: abbr, key: 'abbr' },
                            { name: flag, key: 'flag' },
                            { name: created_at, key: 'created_at' },
                            { name: action, key: 'action', fixed: true }
                        ]} />
                </Row>
            </>
        );

        return (
            <>
                <div className="bg-soft py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb main={index} icon={faLanguage} />
                    <SpecialTitle user icon={faLanguage}>{title}</SpecialTitle>
                    <Subtitle user>{index}</Subtitle>
                </div>
                <div className="p-4 pb-0">
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
    get: (page, show, search) => dispatch(actions.getLanguages(page, show, search)),
    delete: id => dispatch(actions.deleteLanguages(id)),
    reset: () => dispatch(actions.resetLanguages()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));