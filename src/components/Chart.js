import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
     pv: 4, amt: 2400,
  },
  {
    name: '4', pv: 3, amt: 2210,
  },
  {
    name: '5', pv: 2, amt: 2290,
  },
  {
    name: '6', pv: 6, amt: 2000,
  },
  {
    name: '7', pv: 8, amt: 2181,
  },
  {
    name: '8', pv: 9, amt: 2500,
  },
  {
    name: '9', pv: 10, amt: 2100,
  },
  {
    name: '10', pv: 9, amt: 2100,
  },
  {
    name: '11', pv: 10, amt: 2500,
  },
  {
    name: '12', pv: 12, amt: 2100,
  },
  {
    name: '13', pv: 12, amt: 2100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <LineChart
        width={900}
        height={250}    
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    );
  }
}
