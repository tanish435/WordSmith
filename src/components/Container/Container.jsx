import React from "react";

function Container({children, classname}) {
    return(
        <div className={`w-full ${classname}`}>
            {children}
        </div>
    )
}

export default Container