import React from 'react'
import {Link} from 'react-router-dom'
export const Withdraw =() =>{

    return(
    <div className="row justify-content-md-center">
      <div className="col-md-4">
      <h3 style={{textAlign:"center"}}>Retirar</h3>
        <form  className="card card-body">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Cuenta de origen"
              autoFocus
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Monto"
            />
          </div>
          <button className="btn btn-primary btn-block">
            Retirar
          </button>
          <Link style={{textAlign:"center",padding:"25px"}} to="/Menu">Cancelar</Link>
        </form>
      </div>
    </div>
    )
}