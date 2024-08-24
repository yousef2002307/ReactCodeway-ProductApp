import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProductCard from './Components/ProductCard'
import {productlist} from './data';
import Modal from './ui/Modal';
import './App.css'
import { Button } from '@headlessui/react';

function App() {
  /* state(useState) */
  let [isOpen, setIsOpen] = useState(true)


  /*handler */
  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }


/* render */
const data = productlist.map(ele => {
  return (
    <>
     <ProductCard key={ele.id} product={ele}/>

    </>
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
    <div className='flex items-center space-x-2'>
    <Button className="bg-indigo-500 hover:bg-blue-600 text-white  w-full">cancel</Button>
    <Button className="bg-red-700 hover:bg-red-900 text-white w-full">submit</Button>
</div>
   </Modal>
    </>
  )
}

export default App
