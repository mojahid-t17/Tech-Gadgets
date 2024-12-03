import { useLoaderData } from 'react-router-dom';
import {
    Bar,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';

const Statistics = () => {
    const products = useLoaderData();
    return (
        <div className='max-w-5xl mx-auto my-16'>
            <h1 className='mt-24 text-2xl font-bold text-center'>Product Statistics</h1>
            <ComposedChart
                width={1000}
                height={400}
                data={products}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="product_id" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="price" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="price" stroke="#ff7300" />
            </ComposedChart>
        </div>
    );
};

export default Statistics;
