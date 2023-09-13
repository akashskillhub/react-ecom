import React, { useEffect } from 'react'
import useDymanicForm from '../../hooks/useDymanicForm'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/userActions'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const dispatch = useDispatch()
    const handleSubmit = () => {
        if (!state.email || !state.password) {
            alert("Please fill all feilds")
        } else {
            dispatch(login(state))
        }
    }
    const navigate = useNavigate()
    const { auth } = useSelector(state => state.user)
    useEffect(() => {
        if (auth) {
            navigate("/")
        }
    }, [auth])

    const config = [
        { fieldName: "email", type: "text" },
        { fieldName: "password", type: "password" },
        { fieldName: "Login User", type: "submit", onClick: handleSubmit },
    ]
    const [ui, state, pre] = useDymanicForm(config)
    return <>
        {pre}
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    Flowbite
                </a>
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        {ui}
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Login