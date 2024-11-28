import React from 'react'
// import {Images} from '../Fooddata/Fooddata'
import { useDispatch } from 'react-redux';
import { removefromCart } from '../redux/Slice/CartSlice';
import { incrementQty,decrementQty } from '../redux/Slice/CartSlice';
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
const Carditem = ({id,name,price,img,qty}) => {
  const dispatch = useDispatch();

  const darkMode = useSelector((state) => state.darkMode.isDarkMode);
  return (
<div className={`flex gap-2 shadow-md  rounded-lg p-1 mb-3 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
    }`}>
      <img src={img} alt='' className='w-[50px] h-[50px]'/>

 <MdDelete onClick={()=>{dispatch(removefromCart({id,img,name,price,qty}))
 toast(`${name} Removed`, {
  icon: '😒',
});
}
} className='absolute right-7  cursor-pointer'/>

    <div >
       <h2 className='font-bold max-w-2'>{name.slice(0,20)}</h2>
         <div className='flex justify-between'>
            <span className='text-orange-400'>₹{price}</span>
              <div className='flex justify-center items-center gap-2 absolute right-7'>
             
              <AiOutlineMinus onClick={()=>
                qty >1 ? dispatch(decrementQty({id,qty})): (qty=0)} className='border-2 border-gray-600  hover:text-white hover:bg-orange-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer  '/>
              <span>{qty}</span>
              <AiOutlinePlus onClick={()=>
                dispatch(incrementQty({id}))
              } className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-orange-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer font-bold  '/>
              </div>
         </div>
    </div>
</div>
  )
}

export default Carditem
