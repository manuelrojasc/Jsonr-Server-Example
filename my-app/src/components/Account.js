import React from 'react'
import {Link} from 'react-router-dom'
export const Account =() =>{


    return(
    <div className="row justify-content-md-center">
      <div className="col-md-4">
        <form  className="card card-body">
          <div className="form-group">
            <input
            value="wrong value" 
              type="text"
              className="form-control is-invalid"
              placeholder="DNI"
              autoFocus
            />
          </div>
          <div className="form-group">
            <select class="form-control" >
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">Coconut</option>
                <option value="mango">Mango</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Cuenta"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Contraseña"
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
