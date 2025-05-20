import React from 'react'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

const Verify = () => {
    const { navigate, token, setCartItems, backendUrl } = React.useContext(ShopContext)
    const [searchParam, setSearchParam] = useSearchParams()

    const success = searchParam.get('success')
    const orderId = searchParam.get('orderId')


    const verifyPayment = async () => {
        try {
            if(!token){
                return null
            }

            const response = await axios.post(backendUrl + '/api/order/verifyStripe',{success, orderId}, {headers:{token}})
            if(response.data.success){
                setCartItems({})
                navigate('/orders')
            }else{
                navigate('/cart')
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        verifyPayment()
    },[token])
    return(
        <div>
          
        </div>
    )
}
//12:45:56

export default Verify