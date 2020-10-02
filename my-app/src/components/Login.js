
import React from 'react'
import {Link} from 'react-router-dom'

export const Login =() =>{

    return(
    <div style={{padding: "0 1rem",margin: "1rem"}} className="row justify-content-md-center">
      <div className="col-md-5">
        <form  className="card card-body">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Cuenta"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
            />
          </div >
          <Link className="btn btn-primary" style={{textAlign:"center"}}  to="/Menu">Iniciar sesion</Link>
          <div style={{textAlign:"center"}}>
          <Link style={{textAlign:"center",padding:"25px"}}  to="/Account">Crear Cuenta</Link>
          <Link style={{textAlign:"center"}}  to="/Client">Crear Cliente</Link>
          </div>
        </form> 
      </div>
    </div>
    )

}
    
