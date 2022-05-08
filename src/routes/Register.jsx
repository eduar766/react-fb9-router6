import { useContext, useState } from "react"
import { UserContext } from "../context/UserProvider"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const [email, setEmail] = useState('eduar7662@gmail.com')
    const [password, setPassword] = useState('123456')

    const {registerUser} = useContext(UserContext)
    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()
        console.log('procesando password', email, password)
        try{
            await registerUser(email, password).then( () => navigate('/'))
        } catch(error) {
            console.log(error.code)
        }
    }

    return(
        <>
            <h1>Register</h1>
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
                <button type="submit">Registrar</button>
            </form>
        </>
    )
}

export default Register