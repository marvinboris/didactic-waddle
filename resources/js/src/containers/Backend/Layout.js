import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import Toolbar from '../../components/Backend/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Backend/Navigation/SideDrawer/SideDrawer';
import CustomSpinner from '../../components/UI/CustomSpinner/CustomSpinner';

import { authLogout } from '../../store/actions';
import { updateObject } from '../../shared/utility';

import './BackEnd.css';

class BackEnd extends Component {
    state = {
        isOpen: false,

        date: { weekDay: null, day: null, month: null, year: null },
        clock: { hours: null, minutes: null, seconds: null },

        selectedItem: '',

        interval: null,

        notifications: [],
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.auth.data.notifications && !prevState.notifications) {
            const { notifications } = nextProps.auth.data;
            return updateObject(prevState, { notifications });
        }
        return prevState;
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

    logoutHandler = () => {
        const { onAuthLogout } = this.props;
        onAuthLogout();
    }

    toggle = () => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }

    selectItem = item => this.setState({ selectedItem: item });

    render() {
        const { isOpen, date, clock, selectedItem, notifications } = this.state;
        const {
            auth: { loading, data, role },
            content: { cms },
            children
        } = this.props;
        let footerContent;

        const {
            global: { app_name, company_name },
            pages: { backend: { footer: { copyright, all_rights } } }
        } = cms;

        footerContent = <>
            <span className="text-700">&copy;</span> {copyright} {new Date().getFullYear()} <span className="text-700">{app_name}</span>. {all_rights} <span className="text-700">{company_name}</span>.
        </>;

        const isAuthenticated = role !== undefined;

        return <div className="BackEnd text-left">
            <Toolbar notifications={notifications} data={data} toggle={this.toggle} logoutHandler={this.logoutHandler} date={date} clock={clock} cms={cms} />
            {isAuthenticated && <SideDrawer data={data} role={role} isOpen={isOpen} toggle={this.toggle} selectItem={this.selectItem} selectedItem={selectedItem} cms={cms} />}

            <main className="bg-white position-relative full-height-user pb-5">
                <div className="mb-5 pb-5">
                    {loading ? <div className="h-100 d-flex justify-content-center align-items-center"><CustomSpinner /></div> : children}
                </div>

                <footer className="position-absolute d-none d-sm-block py-3 px-4 bg-dark text-white">
                    {footerContent}
                </footer>
            </main>
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    onAuthLogout: () => dispatch(authLogout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BackEnd));