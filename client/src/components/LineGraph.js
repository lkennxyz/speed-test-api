import React, { Component } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

class LineGraph extends Component {
  render() {
    return (
      <ResponsiveContainer width={800} height={450}>
        <LineChart data={this.props.data}>
          <Line type="monotone" dataKey="Mbps" stroke="#8884d8" />
          <XAxis dataKey="Time"/>
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>

    );
  }
}

export default LineGraph;