import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import chartColor from './cfg';

const data = {
    labels: [
        'Cars',
        'Trains',
        'Airplanes'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            chartColor.color01,
            chartColor.color02,
            chartColor.color03
        ],
        hoverBackgroundColor: [
            chartColor.color01Hover,
            chartColor.color02Hover,
            chartColor.color03Hover
        ]
    }]
};

class DoughnutExample extends React.Component {

    render() {
        return (
            <div>
                <Doughnut data={data}/>
            </div>
        )
    }
}


export default DoughnutExample;
