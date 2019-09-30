import React from 'react';
import {Polar} from 'react-chartjs-2';
import chartColor from './cfg';

const data = {
  datasets: [{
    data: [
      11,
      16,
      7,
      3,
      14
    ],
    backgroundColor: [
        chartColor.color01,
        chartColor.color04,
        chartColor.color02,
        chartColor.color07,
        chartColor.color08,
    ],
    hoverBackgroundColor: [
        chartColor.color01Hover,
        chartColor.color04Hover,
        chartColor.color02Hover,
        chartColor.color07Hover,
        chartColor.color08Hover,
    ],
    label: 'My dataset' // for legend
  }],
  labels: [
    'Red',
    'Green',
    'Yellow',
    'Grey',
    'Blue'
  ]
};

class PolarExample extends React.Component {

    render() {
        return (
            <div>
              <Polar data={data} />
            </div>
        )
    }
}

export default PolarExample;