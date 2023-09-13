import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const UserProtected = ({ compo }) => {
    const { auth } = useSelector(state => state.user)
    return auth ? compo : <div className='h-screen flex flex-col justify-center items-center gap-5'>
        <h1>Please Login To Continue</h1>
        <Link to="/login" className="btn btn-primary">Login</Link>
    </div>
}

export default UserProtected