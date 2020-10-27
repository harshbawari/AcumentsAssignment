import React, { Component } from 'react';
import BankBalance from './BankBalance';

export default class Main extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <BankBalance />

            </div>
        );
    }
}