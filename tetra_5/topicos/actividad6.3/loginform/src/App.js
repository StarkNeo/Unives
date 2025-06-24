import { useState } from "react"

const App = () => {
  const [usuario, setEmail] = useState("")
  const [contrasena, setContrasena] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)
  const [message, setMessage] = useState("Iniciar Sesion")

  let email = "test@test.com"
  let password = "test"

  const handleSubmit = (e) => {
    e.preventDefault()
    if(usuario === email && contrasena === password){
      setLoggedIn(true)
      alert("Inició correctamente la sesión")
      setMessage("")
      return
    }
  }

  const handleLogout=()=>{
    setLoggedIn(false)
    setEmail("")
    setContrasena("")
    setMessage("Ha salido de la sesión")
    setTimeout(()=>{
      setMessage("Iniciar Sesion")
    },3000)
    
  }

  const Bienvenida = () => {
    return (
      <div>
        <h1>Bienvenido: {usuario}</h1>
        <button onClick={handleLogout}>Salir </button>
      </div>
      
      
    )
  }

  return (
    <>
    <h2>{message}</h2>
      {loggedIn ? Bienvenida() :
        
        <form onSubmit={handleSubmit}>
          <div>
            email: <input type="email" name="usuario" id="usuario" value={usuario} onChange={({ target }) => setEmail(target.value)} />
          </div>
          <div>
            contrasena: <input type="password" name="contrasena" id="contrasena" value={contrasena} onChange={({ target }) => setContrasena(target.value)} />
          </div>
          <input type="submit" value="Entrar" />
        </form>

      }

    </>



  )
}


export default App