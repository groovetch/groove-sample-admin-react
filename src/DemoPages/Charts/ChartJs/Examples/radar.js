import React from 'react';
import {Radar} from 'react-chartjs-2';
import chartColor from './cfg';

const data = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(234,232,231,1)',
      pointBackgroundColor: 'rgba(234,232,231,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(234,232,231,1)',
      data: [65, 59, 90, 81, 56, 55, 40]
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'rgba(182, 146, 150,0.2)',
      borderColor: 'rgba(182, 146, 150,1)',
      pointBackgroundColor: 'rgba(182, 146, 150,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(182, 146, 150,1)',
      data: [28, 48, 40, 19, 96, 27, 100]
    }
  ]
};

class RadarExample extends React.Component {

    render() {
        return (
            <div>
              <Radar data={data} />
            </div>
        )
    }
}


export default RadarExample;