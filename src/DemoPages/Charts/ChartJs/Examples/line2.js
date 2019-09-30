import React from 'react';
import {Line} from 'react-chartjs-2';
import chartColor from './cfg';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: true,
      lineTension: 0.1,
      backgroundColor: chartColor.color08,
      borderColor: chartColor.color08Hover,
      borderCapStyle: 'round',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: chartColor.color08Hover,
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: chartColor.color08Hover,
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};


class LineExample2 extends React.Component {

    render() {
        return (
            <div>
              <Line data={data} />
            </div>
        )
    }
}

export default LineExample2;