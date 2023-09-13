import React, { useEffect } from 'react'
import Cart from './Cart'
import { useDispatch, useSelector } from 'react-redux'
import { palceOrder } from '../../redux/actions/userActions'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { userInvalidate } from '../../redux/slices/userSlice'

const Checkout = () => {
    const dispatch = useDispatch()
    const { cart, orderPlaced, auth } = useSelector(state => state.user)
    const handleSubmit = e => {
        dispatch(palceOrder({
            userId: auth.id,
            products: cart
        }))
    }
    const navigate = useNavigate()
    useEffect(() => {
        if (orderPlaced) {
            toast.success("Order Placed Success")
            dispatch(userInvalidate())
            navigate("/success")
        }
    }, [orderPlaced])
    return <>

        <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
            <div class="px-4 pt-8">
                <p class="text-xl font-medium">Order Summary</p>
                <p class="text-gray-400">Check your items. And select a suitable shipping method.</p>


                <p class="mt-8 text-lg font-medium">Payment Methods</p>
                <form class="mt-5 grid gap-6">
                    <div class="relative">
                        <input class="peer hidden" id="radio_1" type="radio" name="radio" checked disabled />
                        <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                        <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
                            <img class="w-14 object-contain" src="/images/naorrAeygcJzX0SyNI4Y0.png" alt="" />
                            <div class="ml-5">
                                <span class="mt-2 font-semibold">Online</span>
                                <p class="text-slate-500 text-sm leading-6">Comming Soon</p>
                            </div>
                        </label>
                    </div>
                    <div class="relative">
                        <input class="peer hidden" id="radio_2" type="radio" name="radio" checked />
                        <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                        <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_2">
                            <img class="w-14 object-contain" src="/images/oG8xsl3xsOkwkMsrLGKM4.png" alt="" />
                            <div class="ml-5">
                                <span class="mt-2 font-semibold">POD</span>
                                <p class="text-slate-500 text-sm leading-6">Pay On Delivery</p>
                            </div>
                        </label>
                    </div>
                </form>
            </div>
            <div className='mt-10 bg-gray-50 px-4 pt-8 lg:mt-0'>
                <Cart from="checkout" />
                <button
                    onClick={handleSubmit}
                    className="btn btn-primary w-full mt-2">Place Order</button>
            </div>mt-10 bg-gray-50 px-4 pt-8 lg:mt-0
        </div>

    </>
}

export default Checkout