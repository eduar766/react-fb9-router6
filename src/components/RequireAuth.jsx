import { useContext } from "react"
import { UserContext } from "../context/UserProvider"
import {Navigate} from "react-router-dom"

const RequireAuth = (props) => {
    const {user} = useContext(UserContext)

    if (!user) {
        return <Navigate to='/login' />
    }
    return props.children
}

export default RequireAuth