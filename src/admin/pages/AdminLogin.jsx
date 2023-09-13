import React, { useEffect } from 'react'
import useDymanicForm from '../../hooks/useDymanicForm'
import { useDispatch, useSelector } from 'react-redux'
import { adminLogin } from '../../redux/actions/adminActions'
import { toast } from 'react-toastify'
import { invalidate } from '../../redux/slices/adminSlice'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const dispatch = useDispatch()
    const { auth, loading, error } = useSelector(state => state.admin)
    const navigate = useNavigate()
    const handleSubmit = () => {
        dispatch(adminLogin(state))
    }
    useEffect(() => {
        if (auth) {
            toast.success("ADMIN Login Success")
            navigate("/admin")
        }
    }, [auth])
    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch(invalidate())
        }
    }, [error])


    const config = [
        { fieldName: "email", type: "text", label: "email" },
        { fieldName: "password", type: "password", label: "password" },
        { fieldName: "submit", type: "submit", onClick: handleSubmit },
    ]
    const [ui, state, pre] = useDymanicForm(config)

    if (loading) return <h1>Loading....</h1>
    return <div className='flex flex-col  justify-center items-center h-screen'>
        <div className='w-80 p-4 border-gray-100 border-2 '>
            {ui}
        </div>
    </div>
}

export default AdminLogin