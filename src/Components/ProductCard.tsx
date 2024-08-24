import React from "react";
import Image from "./Image";
import Button from "../ui/Button";
import { IProduct } from "../Interface";
import { txtslicer } from "../functions";
interface IProps {
product : IProduct
}
export const ProductCard= ({product} : IProps) => {
    return (
 <>
 <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 rounded-lg shadow-lg  bg-white border border-gray-200 p-2 flex flex-col">
    <Image srcimg={`${product.imageUrl}`} altimg="product" classes=" "/>

<h2>{product.title}</h2>
<p>
    {txtslicer(product.description)}

</p>
<div className="flex space-x-2 mt-3">
<span className="w-5 h-5 bg-indigo-500 rounded-full"></span>
<span className="w-5 h-5 bg-red-500 rounded-full"></span>
<span className="w-5 h-5 bg-yellow-500 rounded-full"></span>
</div>

<div className="flex items-center justify-between">
    <span>{product.price}$</span>
    <Image srcimg="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" altimg="product" classes=" w-10 h-10 rounded-full "/>
  

</div>
<div className="flex items-center justify-between space-x-2">
<Button className="bg-indigo-500 hover:bg-blue-600 text-white p-2 w-full" onClick={()=>console.log('clicked')}>edit</Button>
<Button className="bg-red-700 hover:bg-red-900 text-white p-2 w-full">delete</Button>
<Button className="bg-green-500 hover:bg-green-600 text-white p-2 w-full">edit</Button>
<Button className="bg-slate-500 hover:bg-slate-600 text-white p-2 w-full">loading</Button>
<Button  className="bg-gray-700 hover:bg-gray-900 text-white p-2 w-full" width="w-fit">delete</Button>
</div>
</div>
 </>       

    )

}
export default ProductCard