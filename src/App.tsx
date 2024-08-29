import React, { useState,Fragment } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProductCard from './Components/ProductCard'
import {productlist} from './data';
import Modal from './ui/Modal';
import './App.css'
import { Button } from '@headlessui/react';
import { formdata, colors } from './data';
import Input from './ui/Input';
import { IProduct } from './Interface';
import { validationerrorsProduct } from './Validation';
import Error from './Components/Error';
import CircleColor from './ui/CircleColor';
function App() {
  /* state(useState) */
  let [isOpen, setIsOpen] = useState(false)
  const [errorform, seterrorform] = useState({
    title : '',
    description : '',
    url : '',
    price : ''
  });
  const [product, setProduct] = useState<IProduct>({
    title : "",
    description : "",
    url : "",
    price : "",
    colors : [],
    catagory : {
      name : "",
      imageUrl : ""
    }
  })
const [products,setproducts ]= useState<IProduct[]>(productlist);
  const [tempcolors,settempcolors] = useState<string[]>([]);
console.log(tempcolors)
  /*handler */
  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
function eventhandler(event:React.ChangeEvent<HTMLInputElement>) {
  const { value, name } = event.target;
setProduct({...product,[name]:value});

seterrorform({
  ...errorform,
  [name]:''});

}

function submithandler(event:React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  console.log('sdsddsdssdds');
  console.log(product);
  let errors = validationerrorsProduct({title : product.title,description : product.description,url : product.url,price : product.price});
let hasErrors = Object.values(errors).some(ele => ele === '') && Object.values(errors).every(ele => ele === '');
console.log("errors",errors);
console.log(hasErrors,'hasErrors');
if(!hasErrors){
  seterrorform(errors);
  return;
}
console.log(product)
 setproducts((prev) => [{...product,id : Date.now(),colors : tempcolors},...prev]);// 
 setProduct({
  title : "",
  description : "",
  url : "",
  price : "",
  colors : [],
  catagory : {
    name : "",
    imageUrl : ""
  }
 })
 settempcolors([]);
 close();
}


const canceldata =  () :void => {
setProduct({
  title : "",
  description : "",
  url : "",
  price : "",
  colors : [],
  catagory : {
    name : "",
    imageUrl : ""
  }
});
close();
}
/* render */
const data = products.map(ele => {
  return (
    <>
     <ProductCard key={ele.id} product={ele}/>

    </>
  )
})


const formdatarender = formdata.map(ele => {
  return (
    
    <div className="form-control w-full mb-4" key={ele.id}>
    <label className="label text-gray-600 capitalize mb-2 block font-medium">
      <span className="label-text">{ele.label}</span>
    </label>
    <Input className={`input input-bordered focus:ring-2 focus:ring-indigo-500  rounded-md focus:outline-none focus:border-indigo-500 w-full border border-gray-300 shadow-md px-3 py-3 text-md ${errorform[ele.name] ?  'border-red-500' :''}`} name={ele.name} type={ele.type} placeholder={ele.placeholder} value={product[ele.name]} onChange={eventhandler} />
   
    <Error message={errorform[ele.name]}/>
   
  

  </div>

  )
})

//colors mapping

let coloritem = colors.map(ele =>{
return(
  <>
<CircleColor key={ele} color={ele} onClick={()=> {
  if(tempcolors.includes(ele)){
    settempcolors((prev) => [...prev.filter(el => el !== ele)])
    return;
  }
  settempcolors((prev) => [...prev,ele])
}
  } />
</>
)
});
  return (
    <>
    <main className='container mx-auto mt-12'>
      <Button className="bg-indigo-500 hover:bg-blue-600 text-white  w-full" onClick={open}>add product</Button>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
   
  {data}
</div>
</main>
   <Modal isOpen={isOpen} close={close} title="add product" > 
   <form onSubmit={submithandler} className='space-x-3'>
    <div className='flex flex-col mb-4 '>
 
    {formdatarender}
    </div>
    <div className='flex items-center space-x-2'>
    <Button type='button' className="rounded-md px-2 py-3 bg-gray-500 hover:bg-gray-600 text-white w-full " onClick={canceldata}>cancel</Button>
    <Button type='submit' className="rounded-md px-2 py-3 bg-indigo-500 hover:bg-blue-600 text-white  w-full">submit</Button>
    </div>
    <div className='mt-6 flex  flex-wrap'>
{
tempcolors.map(ele => {
  return(
<React.Fragment key={ele}>
  <span style={{backgroundColor:ele}} className='text-white px-2 py-1 rounded mr-2 mb-2'>{ele}</span>
</React.Fragment>
  )
})
}
</div>
    <div className='mt-6 flex justify-between'>
{coloritem}
</div>
    </form>

   </Modal>
    </>
  )
}

export default App
