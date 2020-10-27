import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return { balance: state.balance }
}

class BankBalance extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>{this.props.balance}</div>
        );
    }
}

export default connect(mapStateToProps)(BankBalance);