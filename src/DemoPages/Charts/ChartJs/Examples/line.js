import React from 'react';
import {Line} from 'react-chartjs-2';
import chartColor from './cfg';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: chartColor.color01Hover,
      borderColor: chartColor.color01Hover,
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: chartColor.color01Hover,
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 2,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: chartColor.color01Hover,
      pointHoverBorderColor: chartColor.color01Hover,
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};


class LineExample extends React.Component {

    render() {
        return (
            <div>
              <Line data={data} />
            </div>
        )
    }
}

export default LineExample;