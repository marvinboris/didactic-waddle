import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Logo.css';


class Logo extends Component {
    render() {
        const {
            big, sm, dark,
            content: {
                cms: {
                    global: { logo }
                }
            }
        } = this.props;

        return <div className="Logo mb-0 text-white" >
            {dark ?
                <img src={logo} style={{ height: sm ? 40 : 60 }} />
                :
                <img src={logo} style={{ height: sm ? 40 : 60 }} />}
        </div>;
    }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Logo);