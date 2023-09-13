import { useEffect, useState } from "react"
import { MdDelete, MdEditSquare } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers, getUsersOrder } from "../../redux/actions/adminActions"

const Users = () => {

    return <>
        <UserTable />
    </>
}

const UserTable = () => {
    const dispatch = useDispatch()
    const { users, userOrders } = useSelector(state => state.admin)
    useEffect(() => {
        dispatch(getAllUsers())
    }, [])
    const [selectedUser, setSelectedUser] = useState()
    useEffect(() => {
        if (selectedUser) {
            dispatch(getUsersOrder(selectedUser))
        }
    }, [selectedUser])
    return <>

        <div className="grid grid-col-1 md:grid-cols-2">
            <div>
                {users && users.map(item => <div
                    onClick={e => setSelectedUser(item.id)}
                    className={`p-4 border-2 border-gray-200 m-2 cursor-pointer hover:bg-slate-100 transition-all duration-100 ${selectedUser === item.id && "bg-slate-100 border-green-400"}`}
                    key={item.id}>
                    <h1 className="text-lg font-bold">{item.name}</h1>
                    <p className="text-gray-400">{item.email}</p>
                </div>)}
            </div>
            <div>
                {userOrders && userOrders.map(item => <div
                    className="p-4 border-2 border-gray-200 m-2 cursor-pointer hover:bg-slate-100 transition-all duration-100"
                    key={item.id}>

                    {item.products.map(p => <h1>{p.name}</h1>)}
                    <h1 className="text-lg font-bold">{item.status}</h1>

                </div>)}
            </div>
        </div>
    </>
}

export default Users


