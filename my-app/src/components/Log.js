import React from 'react'
import {Link} from 'react-router-dom'
export const Log =() =>{
    return(
      <div className="row justify-content-md-center"> 
        <div className="col-md-6">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Operacion</th>
              <th>Monto</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
        <Link style={{textAlign:"center",padding:"25px"}} to="/Menu">Cancelar</Link>
      </div>
      </div>

    )
}