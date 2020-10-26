import React, { Component } from 'react';
import { connect } from 'react-redux';

class BankBalance extends Component {

    constructor(props) {
        super(props);

    }

    mapStateToProps = state => {
        return { balance: state.balance }
    }

    render() {
        return (
            
        );
    }
}