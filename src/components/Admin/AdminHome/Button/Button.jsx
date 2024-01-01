/* eslint-disable react/prop-types */

const Button = ({ type }) => {
    return (
        <button className={`${type === "Approved" ? "bg-green-200 text-green-600" : type === "Declined" ? "bg-red-200 text-red-600" : "bg-blue-200 text-blue-600"} p-1 rounded-md`}>{type}</button>
    );
};

export default Button;