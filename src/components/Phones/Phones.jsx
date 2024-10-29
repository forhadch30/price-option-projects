import axios from "axios";
import { useEffect, useState } from "react";
import { Bars, ColorRing, FallingLines, RevolvingDot } from "react-loader-spinner";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Phones = () => {
    const [phones, setPhones] = useState([])
    const [spinner, setSpinner] = useState(true)

    useEffect(() => {

        // fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
        //     .then(res => res.json())
        // .then(data => setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phoneWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                console.log(phoneWithFakeData)
                setPhones(phoneWithFakeData)
                setSpinner(false)
            })
    }, [])

    return (
        <div>
            <FallingLines
                color="#4fa94d"
                width="100"
                visible={true}
                ariaLabel="falling-circles-loading"
            />
            <RevolvingDot
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="revolving-dot-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
            {
                spinner && <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />
            }

            <h2 className="text-2xl font-bold">Phone: {phones.length}</h2>
            <BarChart width={1200} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default Phones;