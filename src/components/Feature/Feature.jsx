import { GoCheckCircle } from "react-icons/go";
const Feature = ({ feature }) => {
    return (
        <div>
            <h2 className="flex items-center gap-3">
                <GoCheckCircle className="text-xl text-yellow-600"></GoCheckCircle>
                {feature}</h2>
        </div>
    );
};

export default Feature;