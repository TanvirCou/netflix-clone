/* eslint-disable react/prop-types */
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({ data, grid, dataKey, title }) => {

  return (
    <div className='py-4 px-6'>
      <p className='text-xl font-semibold pb-2'>{title}</p>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke='#5550bd' />
          <Line type="monotone" dataKey={dataKey} stroke='#5550bd' />
          <Tooltip />
          {grid && <CartesianGrid strokeDasharray="3 3" />}
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;