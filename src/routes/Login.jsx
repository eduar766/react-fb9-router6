import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserProvider"

const Login = () => {
    const [email, setEmail] = useState('eduar7662@gmail.com')
    const [password, setPassword] = useState('123456')

    const {loginUser} = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()
        console.log('procesando password', email, password)
        try{
            await loginUser(email, password).then( () => navigate('/'))
            console.log('usuario autorizado')
        } catch(error) {
            console.log(error.code)
        }
    }

    
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Ingresa tu email"
                    value={email}
                    onChange={ e => setEmail(e.target.value)}
                ></input>
                <input 
                    type="password" 
                    placeholder="Contraseña"
                    value={password}
                    onChange={ e => setPassword(e.target.value)}
                ></input>
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login 