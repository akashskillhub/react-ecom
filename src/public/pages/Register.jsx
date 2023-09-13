import { useDispatch, useSelector } from "react-redux"
import useDymanicForm from "../../hooks/useDymanicForm"
import { register } from "../../redux/actions/userActions"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { userInvalidate } from "../../redux/slices/userSlice"

const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { loading, error, registered } = useSelector(state => state.user)

    useEffect(() => {
        if (registered) {
            toast.success("Register Success")
            dispatch(userInvalidate())
            navigate("/login")
        }
    }, [registered])

    useEffect(() => {
        if (error) {
            toast.error(error)
        }
    }, [error])

    const handleSubmit = e => {
        dispatch(register(state))
    }
    const config = [
        { fieldName: "name", type: "text" },
        { fieldName: "email", type: "text" },
        { fieldName: "password", type: "password" },
        { fieldName: "Register User", type: "submit", onClick: handleSubmit },
    ]
    const [ui, state, pre] = useDymanicForm(config)
    return <>
        <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
            <div class="container max-w-screen-lg mx-auto">
                <div>


                    <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                            <div class="text-gray-600">
                                <p class="font-medium text-lg">Personal Details</p>
                                <p>Please fill out all the fields.</p>
                            </div>

                            <div className="lg:col-span-2">
                                {ui}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </>
}

export default Register