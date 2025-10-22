import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid,ResponsiveContainer } from 'recharts';
const Chart = () => {
    const ratings=[
        {name: '2 star', count: 350000},
         
        {name: '3 star', count: 1200000},
        {name: '4 star', count: 4000000},
        {name: '5 star', count: 7000000} ]
    return (
        <div className='h-72 w-72'>
            <ResponsiveContainer width={"100%"} height={"100%"}>
          <BarChart width={600} height={300} data={ratings} layout="horizontal">
    <XAxis dataKey="name" stroke="#8884d8" />
    <YAxis />
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="count" fill="#8884d8" barSize={30} />
  </BarChart>
  </ResponsiveContainer>
        </div>
    );
};

export default Chart;