import React from "react";
import { ReactNode } from "react";
interface IProps extends React.InputHTMLAttributes<HTMLInputElement>{

}
export const Input= ({...rest} : IProps) => {
    return (
 <>
 <input  className="input input-bordered focus:ring-2 focus:ring-indigo-500  rounded-md focus:outline-none focus:border-indigo-500 w-full border border-gray-300 shadow-md px-3 py-3 text-md" {...rest} />
 
    


 </>       

    )

}
export default Input