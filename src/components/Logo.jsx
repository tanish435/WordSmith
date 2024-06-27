import React, { useEffect } from "react";
import appwriteService from '../appwrite/config'
import useTheme from "../contexts/theme";

function Logo({ width = '100px', classname = '' }) {
    const { theme } = useTheme()


    if (theme === 'dark') {
        return (
            <img src={appwriteService.getFilePreview('6671bd6c003745faeff3')}
                alt="WordSmith"
                // width={width}
            />
        )
    } else {
        return (
            <img src={appwriteService.getFilePreview('6671bcdf0011b24e2c8c')}
                alt="WordSmith"
                // width={width}
            />
        )
    }
}

export default Logo