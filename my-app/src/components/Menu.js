import React from 'react'
import {Link} from 'react-router-dom'
export const Menu =() =>{

    return(

        <div className="row justify-content-md-center">
            <div className="col-md-4">
                <ul  class="nav flex-column">
                    <li class="nav-item">
                        <Link className="nav-link  btn-success" style={{textAlign:"center",padding:"5px",borderRadius:"15px"}} to="/Deposit">Depositar</Link>
                    </li>
                    <li class="nav-item">
                    <Link className="nav-link btn-success" style={{textAlign:"center",padding:"5px",borderRadius:"15px"}} to="/Withdraw">Retirar</Link>
                    </li>
                    <li class="nav-item">
                    <Link className="nav-link btn-success" style={{textAlign:"center",padding:"5px",borderRadius:"15px"}} to="/Log">Movimiento</Link>
                    </li>
                </ul>
             <div>
                 <h4>Saldo</h4>
                <input type="text" placeholder="25000.00" disabled="disabled"></input>
                  <div>
                  <Link  style={{textAlign:"center"}} to="/">Cerrar sesion</Link>
                  <Link  style={{textAlign:"center" ,padding:"60px"}} to="/Account">Editar cuenta</Link>
                  </div>
             </div>
             
        </div>
    
        </div>
        
    )

}