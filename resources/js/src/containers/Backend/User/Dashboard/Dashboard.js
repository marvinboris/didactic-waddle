import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { faTachometerAlt, faEnvelope, faClock, faLandmark, faStopwatch, faListAlt } from '@fortawesome/free-solid-svg-icons';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import Form from '../../../../components/Backend/UI/Form/Form';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import Card from '../../../../components/Backend/Dashboard/Card/Card';
import Issue from '../../../../components/Backend/UI/Issue';
import Error from '../../../../components/Error/Error';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';

import * as actions from '../../../../store/actions';
import { updateObject } from '../../../../shared/utility';

import 'react-calendar/dist/Calendar.css';


class Dashboard extends Component {
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
                    pages: { backend: { pages: { dashboard: { user: { title, subtitle, blocks: { total_issues, pending_issues, solved_issues, today_issues }, pending_issues: { title: title_, index } } } } } }
                }
            },
            backend: { dashboard: { loading, error, blocksData, pendingIssues } },
        } = this.props;

        let content = null;
        let errors = null;
        if (!pendingIssues) pendingIssues = [];

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;
            if (blocksData) {
                const data = [
                    {
                        title: total_issues.title,
                        children: blocksData.totalIssues,
                        icon: faClock,
                        link: '/user/issues/pending/',
                        color: 'blue',
                        details: total_issues.description,
                        titleColor: 'white',
                        circleColor: 'white',
                        circleBorder: 'white'
                    },
                    {
                        title: pending_issues.title,
                        children: blocksData.pendingIssues,
                        icon: faLandmark,
                        link: '/user/issues/',
                        color: 'greenblue',
                        details: pending_issues.description,
                        titleColor: 'white',
                        circleColor: 'blue',
                        circleBorder: 'white'
                    },
                    {
                        title: solved_issues.title,
                        children: blocksData.solvedIssues,
                        icon: faEnvelope,
                        link: '/user/issues/solved/',
                        color: 'gold',
                        details: solved_issues.description,
                        titleColor: 'white',
                        circleColor: 'blue',
                        circleBorder: 'white'
                    },
                    {
                        title: today_issues.title,
                        children: blocksData.todayIssues,
                        icon: faStopwatch,
                        link: '/user/issues/today',
                        color: 'green',
                        details: today_issues.description,
                        titleColor: 'white',
                        circleColor: 'white',
                        circleBorder: 'white',
                    }
                ];

                const cards = data.map(({ title, titleColor, icon, link, color, children, details, circleBorder, circleColor, light }, index) => <Card color={color} key={index} title={title} titleColor={titleColor} details={details} circleBorder={circleBorder} circleColor={circleColor} icon={icon} link={link} light={light}>{children}</Card>);
                const issues = pendingIssues.map(issue => <Issue key={JSON.stringify(issue)} data={issue} />);

                content = (
                    <>
                        <div className="pt-4 px-4 pb-3 bg-blue-10">
                            <Row>
                                {cards}
                            </Row>
                        </div>

                        <Row className="mt-5">
                            <Form icon={faListAlt} title={title_} list={index} link="/user/issues/pending" innerClassName="row" className="shadow-sm">
                                {issues}
                            </Form>
                        </Row>
                    </>
                );
            }
        }

        return (
            <>
                <div className="bg-soft py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb main={subtitle} icon={faTachometerAlt} />
                    <SpecialTitle user icon={faTachometerAlt}>{title}</SpecialTitle>
                    <Subtitle user>{subtitle}</Subtitle>
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
    get: () => dispatch(actions.getDashboard()),
    reset: () => dispatch(actions.resetDashboard()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));