import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import chartColor from './cfg';

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
    labels: [
        'Cars',
        'Trains',
        'Airplanes'
    ],
    datasets: [{
        data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
        backgroundColor: [
            chartColor.color04,
            chartColor.color05,
            chartColor.color06
        ],
        hoverBackgroundColor: [
            chartColor.color04Hover,
            chartColor.color05Hover,
            chartColor.color06Hover
        ]
    }]
});

var createReactClass = require('create-react-class');

export default createReactClass({
    displayName: 'DynamicDoughnutExample',

    getInitialState() {
        return getState();
    },

    componentWillMount() {
        setInterval(() => {
            this.setState(getState());
        }, 5000);
    },

    render() {
        return (
            <div>
                <Doughnut data={this.state} />
            </div>
        );
    }
});