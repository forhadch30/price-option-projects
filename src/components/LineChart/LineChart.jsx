import { LineChart as LChart, Line, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const subjectsMarksData = [
        { "id": 1, "name": "Alice", "math": 78, "physics": 82, "chemistry": 79 },
        { "id": 2, "name": "Bob", "math": 85, "physics": 88, "chemistry": 84 },
        { "id": 3, "name": "Charlie", "math": 92, "physics": 91, "chemistry": 89 },
        { "id": 4, "name": "David", "math": 74, "physics": 76, "chemistry": 80 },
        { "id": 5, "name": "Eve", "math": 88, "physics": 84, "chemistry": 87 },
        { "id": 6, "name": "Frank", "math": 95, "physics": 93, "chemistry": 92 },
        { "id": 7, "name": "Grace", "math": 81, "physics": 79, "chemistry": 82 },
        { "id": 8, "name": "Hannah", "math": 77, "physics": 74, "chemistry": 76 },
        { "id": 9, "name": "Ian", "math": 89, "physics": 87, "chemistry": 90 },
        { "id": 10, "name": "Jack", "math": 83, "physics": 85, "chemistry": 84 }
    ]

    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];

    return (
        <div>
            {
                <LChart width={500} height={400} data={subjectsMarksData}>
                    <XAxis dataKey={'name'}></XAxis>
                    <YAxis></YAxis>
                    <Line dataKey={'math'} stroke='red'></Line>
                    <Line dataKey={'physics'} stroke='yellow'></Line>
                    <Line dataKey={'chemistry'} stroke='green'></Line>
                </LChart>
            }
            {
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                        <Pie data={data01} dataKey={'value'}></Pie>
                    </PieChart>
                </ResponsiveContainer>
            }
        </div>
    );
};

export default LineChart;