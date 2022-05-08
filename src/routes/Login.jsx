import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserProvider"
import { useForm } from "react-hook-form"

const Login = () => {
    const {loginUser} = useContext(UserContext)
    const navigate = useNavigate()

    const {
        register, 
        handleSubmit,
        watch, 
        formState: {errors}, 
        getValues, setError } = useForm( {
            defaultValues: {
                email: 'eduar766@gmail.com',
                password: '123456',
                repassword: '123456'
            }
        })
         
    const onSubmit = async (data) => {
        try{
            await loginUser(data.email, data.password).then( () => navigate('/'))
        } catch(error) {
            console.log(error.code)
            switch(error.code) {
                case 'auth/email-already-in-use':
                    setError("email", {
                        message: "Usuario ya registrado"
                    })
                    break;
                case 'auth/invalid-email':
                    setError("email", {
                        message: "Formato email no válido"
                    })
                    break;
                    case 'auth/user-not-found':
                        setError("email", {
                            message: "Usuario no encontrado"
                        })
                        break;
                default:
                    console.log('Ocurrio un error')
            }
        }
    }
    //console.log(watch('email'))

    return(
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    type="email" 
                    placeholder="Ingresa tu email"
                    {...register("email", { 
                        required: {
                            value: true,
                            message: 'Campo obligatorio'
                        },
                        pattern: {
                            value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
                            message: "Formato incorrecto"
                        }
                    })}
                />
                {errors.email && <span>{errors.email.message}</span>}
                <input 
                    type="password" 
                    placeholder="Contraseña"
                    {...register("password", { 
                        required: true, 
                        setValueAs: (v) => v.trim(),
                        minLength: { 
                            value: 6, 
                            message: 'Minimo 6 carácteres'
                        },
                        validate: {
                            trim: (v) => {
                                if(!v.trim()) 
                                    return "No seas :clown:, escribe algo"
                                true;
                            }
                        }
                    })}
                />
                {errors.password && <span>{errors.password.message}</span> }

                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login 