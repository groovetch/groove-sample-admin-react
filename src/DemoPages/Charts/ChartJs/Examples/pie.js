import React from 'react';
import {Pie} from 'react-chartjs-2';
import chartColor from './cfg';

const data = {
	labels: [
        'Cars',
        'Trains',
        'Airplanes',
        'Motorbike',
        'EBike'
	],
	datasets: [{
		data: [300, 50, 100, 80, 20],
		backgroundColor: [
        chartColor.color05,
        chartColor.color01,
        chartColor.color06,
        chartColor.color08,
        chartColor.color02,
    ],
    hoverBackgroundColor: [
        chartColor.color05Hover,
        chartColor.color01Hover,
        chartColor.color06Hover,
        chartColor.color08Hover,
        chartColor.color02Hover,
    ],
	}]
};

class PieExample extends React.Component {

    render() {
        return (
			<div>
				<Pie dataKey="value" data={data} />
			</div>
        )
    }
}


export default PieExample;