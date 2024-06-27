import React from "react";
import {logout} from '../../store/authSlice'
import { useDispatch } from "react-redux";
import authService from '../../appwrite/auth'
import toast from "react-hot-toast";

function LogoutBtn() {

    const dispatch = useDispatch();

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })

        toast.success('Successfully logged out', {
            style: {
                borderRadius: '30px'
            }
        })
    }

    return(
        <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md"
        onClick={logoutHandler}
        >
            Logout
        </button>
    )
} 
 
export default LogoutBtn