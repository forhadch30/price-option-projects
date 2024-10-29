import Feature from "../Feature/Feature";
const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className="bg-teal-800 text-white p-4 flex flex-col py-10 rounded-xl">
            <div className="text-center">
                <h2>
                    <span className="text-4xl font-bold">{price}</span>
                    <span className="text-2xl">/mon</span>
                </h2>
            </div>
            <h2 className="text-3xl font-semibold text-center">{name}</h2>
            <div className="ml-10 mt-5 flex-grow">
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className="bg-green-500 py-2 w-full mt-4 rounded hover:bg-green-900 font-bold duration-1000">Boy Now</button>
        </div>
    );
};

export default PriceOption;