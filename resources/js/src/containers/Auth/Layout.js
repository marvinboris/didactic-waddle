import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import Logo from '../../components/UI/Logo/Logo';

import Img from '../../assets/images/Victoria_bus_logo.svg';

class Auth extends Component {
    state = {
        date: { weekDay: null, day: null, month: null, year: null },
        clock: { hours: '00', minutes: '00', seconds: '00' },

        interval: null,
    }

    componentDidMount() {
        const {
            content: {
                cms: {
                    pages: { general: { days, months } }
                },
            }
        } = this.props;

        const interval = setInterval(() => {
            const date = new Date();
            const twoDigits = number => number < 10 ? '0' + number : number;

            const weekDay = days[date.getDay()];
            const day = date.getDate();
            const month = months[date.getMonth()];
            const year = date.getFullYear();

            const hours = twoDigits(date.getHours());
            const minutes = twoDigits(date.getMinutes());
            const seconds = twoDigits(date.getSeconds());

            this.setState({ date: { weekDay, day, month, year }, clock: { hours, minutes, seconds } });
        }, 1000);
        this.setState({ interval });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }


    render() {
        const { date: { weekDay, day, month, year }, clock: { hours, minutes, seconds } } = this.state;
        const {
            children,
            content: {
                cms: {
                    global: { app_name, company_name },
                    pages: { general: { date, time }, auth: { footer: { copyright, all_rights } } }
                }
            },
        } = this.props;
        let footerContent, headerContent;

        headerContent = <>
            <div className="text-700 text-large text-right">
                <div className="text-secondary">
                    {(date || '').toUpperCase()} : {weekDay} {day} {month} {year}
                </div>

                <div className="text-black">
                    <FontAwesomeIcon icon={faClock} className="text-dark mr-2" />
                    <div className="time d-inline-block">
                        {(time || '').toUpperCase()} : {hours} : {minutes} : {seconds}
                    </div>
                </div>
            </div>
        </>;

        footerContent = <>
            <span className="text-700 text-dark">&copy;</span> {copyright} {new Date().getFullYear()} <span className="text-700 text-orange">{app_name}</span>. {all_rights} <span className="text-700 text-brown">{company_name}</span>.
        </>;

        return <div className="vh-100 d-flex flex-column bg-soft">
            <div className="border-bottom border-dark-50 py-4">
                <Container className="d-flex justify-content-between align-items-center">
                    <div>
                        <Logo dark />
                    </div>

                    {headerContent}
                </Container>
            </div>

            <div className="flex-fill overflow-hidden">
                <div className="h-100">
                    <Container className="h-100">
                        <Row className="justify-content-between align-items-center h-100">
                            <Col xl={5} className="d-flex flex-column justify-content-center h-100">
                                <div>{children}</div>
                            </Col>

                            <Col xl={5}>
                                <img src={Img} className="img-fluid" />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <div className="bg-black-10 text-black border-top border-dark-50 pt-5 pb-3 d-flex justify-content-center">
                <div>
                    <div className="mb-3">
                        <Logo dark />
                    </div>

                    <div>
                        {footerContent}
                    </div>
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = state => ({ ...state });

export default withRouter(connect(mapStateToProps)(Auth));