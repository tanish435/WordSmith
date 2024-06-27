import React, { useId } from "react";

function Input({
        label,
        type="text",
        classname="",
        ...props
    }, ref) {
    const id = useId()
    
    return(
        <div className="w-full text-black dark:text-white">
            {label &&
                <label htmlFor={id} className="">{label}</label>
                
            }
                {/* <br />     */}
                <input 
                type={type}
                className={`${classname} text-black mt-2`}
                ref={ref}                
                id={id}
                {...props}
                />
        </div>
    )
}

export default React.forwardRef(Input)