import React from 'react'
import {Link} from 'react-router-dom'
export const Client =() =>{
   
    return(
    <div className="row justify-content-md-center">
      <div className="col-md-4">
        <form  className="card card-body">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Nombres"
              autoFocus
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Apellidos"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="DNI"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Edad"
            />
          </div>
          <button className="btn btn-primary btn-block">
            Crear
          </button>
          <Link style={{textAlign:"center"}} to="/">Cancelar</Link>
        </form>
      </div>
    </div>
    )
}