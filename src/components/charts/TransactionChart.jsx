// components/charts/TransactionChart.jsx
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export const TransactionChart = ({ data }) => {
  return (
    <div className="h-64 mb-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="amount" stroke="#8884d8" />
          <Line type="monotone" dataKey="commission" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};