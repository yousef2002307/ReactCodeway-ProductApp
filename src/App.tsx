import { useState,Fragment } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProductCard from './Components/ProductCard'
import {productlist} from './data';
import Modal from './ui/Modal';
import './App.css'
import { Button } from '@headlessui/react';
import { formdata } from './data';
import Input from './ui/Input';
import { IProduct } from './Interface';
function App() {
  /* state(useState) */
  let [isOpen, setIsOpen] = useState(false)
  const [product, setProduct] = useState<IProduct>({
    title : "",
    desc : "",
    url : "",
    price : "",
    colors : [],
    catagory : {
      name : "",
      imageUrl : ""
    }
  })

  /*handler */
  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
function eventhandler(event:React.ChangeEvent<HTMLInputElement>) {
  const { value, name } = event.target;
setProduct({...product,[name]:value})
}

/* render */
const data = productlist.map(ele => {
  return (
    <>
     <ProductCard key={ele.id} product={ele}/>

    </>
  )
})


const formdatarender = formdata.map(ele => {
  return (
    <Fragment key={ele.id}>
    <div className="form-control w-full mb-4">
    <label className="label text-gray-600 capitalize mb-2 block font-medium">
      <span className="label-text">{ele.label}</span>
    </label>
    <Input name={ele.name} type={ele.type} placeholder={ele.placeholder} value={product[ele.name]} onChange={eventhandler} />
   
    
   
  

  </div>
  </Fragment>
  )
})
  return (
    <>
    <main className='container mx-auto mt-12'>
      <Button className="bg-indigo-500 hover:bg-blue-600 text-white  w-full" onClick={open}>add product</Button>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
   
  {data}
</div>
</main>
   <Modal isOpen={isOpen} close={close} title="add product" > 
    <div className='flex flex-col mb-4 '>
    {formdatarender}
    </div>
    <div className='flex items-center space-x-2'>
    <Button className="rounded-md px-2 py-3 bg-indigo-500 hover:bg-blue-600 text-white  w-full" onClick={close}>cancel</Button>
    <Button className="rounded-md px-2 py-3 bg-gray-500 hover:bg-gray-600 text-white w-full">submit</Button>
</div>
   </Modal>
    </>
  )
}

export default App
