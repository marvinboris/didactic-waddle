import React, { Component } from 'react';
import { faCheckSquare, faDesktop, faEdit, faExternalLinkSquareAlt, faEye, faPaperclip, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { Button, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import View from '../../UI/View/View';
import IssueView from './View';

import * as actions from '../../../../store/actions';
import { convertDate } from '../../../../shared/utility';

class Issue extends Component {
    render() {
        const {
            content: {
                cms: {
                    pages: { components: { issue: { view, update, check, mark, posted, by } } }
                }
            },
            data,
            auth: { data: { role: { features } } }
        } = this.props;

        const feature = features.find(f => f.prefix === 'issues');
        const color = ['greenblue', 'green'][data.status];

        return <Col lg={6} className="pt-5 pb-3 position-relative">
            <div className={`position-absolute d-inline bg-${data.platform.color} text-white px-3 py-2 mt-2 rounded-top`} style={{ top: 0, transform: 'transitionY(-100%)', right: '1.5rem' }}>
                <FontAwesomeIcon icon={faDesktop} className="mr-2" />{data.platform.name}
            </div>

            <div className={`rounded bg-${color}-10 h-100 p-3`}>
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <div className="pr-3">
                            <FontAwesomeIcon icon={faSpinner} size="lg" className={`fa-spin text-${color}`} />
                        </div>

                        <div className="text-dark text-large">{posted}: {convertDate(data.created_at)}</div>
                    </div>

                    <div>
                        <View title={`Issue details: ${data.issid}`} content={<IssueView issue={data} />}>
                            <Button type="button" color="orange" size="sm" className="rounded-2">
                                <FontAwesomeIcon icon={faEye} fixedWidth className="mr-1" />
                                {view}
                            </Button>
                        </View>

                        {JSON.parse(feature.permissions).includes('u') && <Link to={`/user/issues/${data.id}/edit`} className="mx-1">
                            <Button type="button" color="blue" size="sm" className="rounded-2 ml-2">
                                <FontAwesomeIcon icon={faEdit} fixedWidth className="mr-1" />
                                {update}
                            </Button>
                        </Link>}

                        <Button type="button" color="greenblue" size="sm" className="rounded-2 ml-2">
                            <FontAwesomeIcon icon={faExternalLinkSquareAlt} fixedWidth className="mr-1" />
                            {check}
                        </Button>

                        <Button type="button" color="green" size="sm" className="rounded-2 ml-2" onClick={() => this.props.mark(data.id)}>
                            <FontAwesomeIcon icon={faCheckSquare} fixedWidth className="mr-1" />
                            {mark}
                        </Button>
                    </div>
                </div>

                <div className="my-3 border-bottom border-thin border-greenblue" />

                <div className="d-flex flex-column justify-content-between px-4">
                    <div className="text-500">{data.description.substring(0, 256)}</div>

                    <div className="text-small pt-4 d-flex">
                        <div className="text-700 text-greenblue mr-3">{by} {data.author.name}</div>
                        {data.files.length > 0 && <span>{data.files.length} <FontAwesomeIcon icon={faPaperclip} /></span>}
                    </div>
                </div>
            </div>
        </Col>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    mark: id => dispatch(actions.postDashboardIssuesMark(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Issue);