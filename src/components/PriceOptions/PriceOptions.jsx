import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOption = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "1 group class per week",
                "Free Wi-Fi",
                "Access during standard hours",
                "1 complimentary guest pass per month"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 49.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited group classes",
                "Access to sauna",
                "Extended access hours",
                "Free Wi-Fi",
                "2 complimentary guest passes per month",
                "10% discount on merchandise"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 69.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited group classes",
                "Access to sauna and steam room",
                "1 personal training session per month",
                "24/7 gym access",
                "Priority booking for classes",
                "5 complimentary guest passes per month",
                "Free bottled water"
            ]
        },
    ]

    return (
        <div>
            <h2 className="text-4xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceOption.map((option) => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;