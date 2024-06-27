import React from "react";

function Button({
    bgColor = "bg-blue-600",
    textColor = "text-white",
    type = "button",
    children,
    className = '',
    ...props
}) {
    return (
        <button
            className={`${bgColor} ${textColor} rounded-xl ${className}`}
            {...props}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button