import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios'
import { toast } from "react-toastify";


const PlaceOrder = () => {
  const [method, setMethod] = useState('cod'); // Corrected state name
  const { navigate,backendUrl,token,cartItems, setCartItems, getCartAmount,delivery_fee,products } = useContext(ShopContext)

  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    phone:''
  })

  const onChangeHandler = (e) =>{
    const name = e.target.name
    const value = e.target.value

    setFormData(data => ({...data,[name]:value}))
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      
      let orderItems = []

      for(const items in cartItems){
        for(const item in cartItems[items]){
          if(cartItems[items][item] > 0){
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if(itemInfo){
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }

      switch (method) {

        case 'cod': 
          const response = await axios.post(backendUrl + '/api/order/place',orderData,{headers:{token}})
          console.log(response.data)
          if(response.data.success){
            setCartItems({})
            navigate('/orders')
          }else{
            toast.error(response.data.message)
          }
          break
          case 'stripe':
            const stripeResponse = await axios.post(backendUrl + '/api/order/stripe',orderData,{headers:{token}})
            if(stripeResponse.data.success){
              const { session_url } = stripeResponse.data
              window.location.replace(session_url)
            }else{
              toast.error(stripeResponse.data.message)
            }
          break
        
          default: 
            toast.error('Invalid payment method');
          break;
        
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }





  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-6 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* Left Side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[600px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1="DELIVERY" text2="INFORMATION" />
        </div>

        {/* Name Inputs */}
        <div className="flex gap-3">
          <input
            type="text"
            className="border border-gray-300 rounded py-2 px-4 w-full"
            placeholder="First Name"
            onChange={onChangeHandler}
            name='firstName'
            value={formData.firstName}
            required
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-2 px-4 w-full"
            placeholder="Last Name"
            onChange={onChangeHandler}
            name='lastName'
            value={formData.lastName}
            required
          />
        </div>

        {/* Full-width Email Input */}
        <input
          type="email"
          className="border border-gray-300 rounded py-2 px-4 w-full"
          placeholder="Email Address"
          onChange={onChangeHandler}
          name='email'
          value={formData.email}
          required
        />

        {/* Full-width Street Input */}
        <input
          type="text"
          className="border border-gray-300 rounded py-2 px-4 w-full"
          placeholder="Street Address"
          onChange={onChangeHandler}
          name='street'
          value={formData.street}
          required
        />

        {/* City, State, Zip Code (Shared Width) */}
        <div className="flex gap-3">
          <input
            type="text"
            className="border border-gray-300 rounded py-2 px-4 w-full"
            placeholder="City"
            onChange={onChangeHandler}
            name='city'
            value={formData.city}
            required
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-2 px-4 w-full"
            placeholder="State"
            onChange={onChangeHandler}
            name='state'
            value={formData.state}
            required
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-2 px-4 w-full"
            placeholder="Zip Code"
            onChange={onChangeHandler}
            name='zipcode'
            value={formData.zipcode}
            required
          />
        </div>

        {/* Country (Shared Width) & Phone (Full Width) */}
        <div className="flex gap-3">
          <input
            type="text"
            className="border border-gray-300 rounded py-2 px-4 w-1/2"
            placeholder="Country"
            onChange={onChangeHandler}
            name='country'
            value={formData.country}
            required
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-2 px-4 w-full"
            placeholder="Phone Number"
            onChange={onChangeHandler}
            name='phone'
            value={formData.phone}
            required
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1="PAYMENT" text2="METHOD" />
          <div className="flex gap-3 flex-col lg:flex-row">
            {/* Payment Method Selection */}
            <div
              onClick={() => setMethod('stripe')}
              className="flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-[14px] h-[14px] border border-gray-300 rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}
              ></p>
              <img src={assets.stripe_logo} alt="Stripe Logo" />
            </div>

            <div
              onClick={() => setMethod('razorpay')}
              className="flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-[14px] h-[14px] border border-gray-300 rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}
              ></p>
              <img src={assets.razorpay_logo} alt="Razorpay Logo" />
            </div>

            <div
              onClick={() => setMethod('cod')}
              className="flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-[14px] h-[14px] border border-gray-300 rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>
              <button type='submit'  className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
