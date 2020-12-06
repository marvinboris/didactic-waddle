import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faBook, faExclamationCircle, faFileVideo, faFile } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'reactstrap';

import Download from '../Download/Download';

import { convertDate } from '../../../../shared/utility';

const I = ({ size = 6, label = null, children }) => <Col lg={size} className="pb-3">
    {label ? (label + ': ') : ''}<span className="text-green text-500">{children}</span>
</Col>;

class View extends Component {
    render() {
        let { issue } = this.props;

        const filesContent = issue.files.filter(d => d).map(file => {
            const { path, type, comment } = file;

            const arr1 = path.split('.');
            const format = arr1[arr1.length - 1];

            const arr2 = path.split('/');
            const arr3 = arr2[arr2.length - 1].split('.');
            const formatlessName = arr3.filter((n, i) => i < arr3.length - 1).join('.');

            let content;
            if (type.includes('image')) content = <div className="embed-responsive embed-responsive-1by1 position-absolute" style={{ background: `url("${path}") no-repeat center`, backgroundSize: 'cover', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />;
            else if (type.includes('video')) content = <FontAwesomeIcon icon={faFileVideo} size="5x" className="text-border position-absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />;
            else content = <FontAwesomeIcon icon={faFile} size="5x" className="text-border position-absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />;

            return <Row key={formatlessName + Math.random()}>
                <Col xl={3}>
                    <a target="_blank" href={path} className="rounded-4 overflow-hidden p-2 bg-light d-flex justify-content-center align-items-center text-nowrap text-transparent shadow position-relative embed-responsive embed-responsive-1by1">
                        <FontAwesomeIcon icon={faFilePdf} className="mr-2" />NID_45094M
                    {content}
                    </a>
                    <Download link={path} name={formatlessName + '.' + format}>
                        <div className="text-uppercase text-truncate pt-3 text-darkblue">
                            {formatlessName}
                        </div>
                    </Download>
                </Col>

                <Col xl={9}>{comment}</Col>
            </Row>
        });

        return <>
            <Row className="m-0 p-3 rounded bg-green-20">
                <Col xs={12}>
                    <div className="text-green text-700 mb-2">
                        <FontAwesomeIcon icon={faExclamationCircle} className="mr-2" fixedWidth />
                            Issue info Gathering
                        </div>
                    <hr />
                </Col>
                <I label="Title">{issue.title}</I>
                <I label="Posted on">{convertDate(issue.created_at)}</I>
                <I label="Platform">{issue.platform.name}</I>
                <I size={12} label="Description">{issue.description}</I>
            </Row>

            {issue.files.length > 0 && <Row className="mt-4 mx-0 p-3 rounded bg-orange-20">
                <Col xs={12}>
                    <div className="d-flex justify-content-between">
                        <div className="text-orange text-700 mb-2">
                            <FontAwesomeIcon icon={faBook} className="mr-2" fixedWidth />
                            Issue files
                        </div>
                    </div>
                    <hr />
                </Col>
                <Col xs={12}>
                    {filesContent}
                </Col>
            </Row>}
        </>;
    }
}

const mapStateToProps = state => ({ ...state });

export default withRouter(connect(mapStateToProps)(View));
