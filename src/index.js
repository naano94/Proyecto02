import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Aplicacion = () =>(
  <div id="contenedor">
    <Router>
      <div>
        <nav className="bg-dark text-white">
          <ul>       
            <li>
              <Link to="/">Empresa</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li>
              <Link to="/equipos">Equipos</Link>
            </li>
            <li>
              <Link to="/precios">Precios</Link>
            </li>
          </ul>
        </nav>
        <div id="subcontenedor" className="container">
          <Header/>
          <Switch>
            <Route path="/contacto">
              <Contacto />
            </Route>
            <Route path="/precios">
              <Precios />
            </Route>
            <Route path="/equipos">
              <Equipos />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>  
    <Footer/>
  </div>
  )

const Header =() =>
<>
  <div id="cabecera" className="container">
    <h1>PC Solutions</h1>
    <br></br><br></br>
    <img height="200px" width="500px" src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Intel_logo_%282020%2C_light_blue%29.svg"></img>
    <img height="200px" width="400px" src="https://i.blogs.es/053094/amd-intel1/1366_2000.jpg"></img> 
  </div>
</>;

const Home =() => 
<>
  <div id="principal" className="container"> 
    <h2>Acerca de la Empresa. </h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Dolorum est reiciendis vitae rerum dignissimos similique rem, 
      nemo recusandae maxime nesciunt reprehenderit quidem perferendis 
      earum natus, distinctio quasi omnis esse hic!Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Dolorum est reiciendis vitae rerum dignissimos similique rem, 
      nemo recusandae maxime nesciunt reprehenderit quidem perferendis 
      earum natus, distinctio quasim omnis esse hic!Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Dolorum est reiciendis vitae rerum dignissimos similique rem, 
      nemo recusandae maxime nesciunt reprehenderit quidem perferendis 
      earum natus, distinctio quasi omnis esse hic!Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Dolorum est reiciendis vitae rerum dignissimos similique rem, 
      nemo recusandae maxime nesciunt reprehenderit quidem perferendis 
      earum natus, distinctio quasi omnis esse hic!Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Dolorum est reiciendis vitae rerum dignissimos similique rem, 
      nemo recusandae maxime nesciunt reprehenderit quidem perferendis 
      earum natus, distinctio quasi omnis esse hic!Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Doloru est reiciendis vitae rerum dignissimos similique rem, 
      nemo recusandae maxima nesciunt reprehenderit quidem perferendis 
      earum natus, distinctio quasi omnis esse hic!
    </p> 
  </div>
</>;

const Contacto =() => 
<>
  <div className="container">
    <h2>Contactese con nosotros.</h2>
      <form>
        <div className="form-group">
          <label>Nombre</label>
          <input type="text" className="form-control" placeholder="Ingrese nombre/s"></input>
        </div>
        <div className="form-group">
          <label>Apellido</label>
          <input type="text" className="form-control" placeholder="Ingrese apellido/s"></input>
        </div>
        <div className="form-group">
          <label>Fecha de Nacimiento</label>
          <input type="date" className="form-control" placeholder="Ingrese fecha de Nacimiento"></input>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Ingrese dirección de email"></input>
        </div>
        <div className="form-group">
          <label>Número de Teléfono</label>
          <input type="number" className="form-control" placeholder="Ingrese número de teléfono"></input>
        </div>
        
        <button type="submit" className="btn btn-dark">Contactarse</button>
      </form>
  </div>  
</>;

const Equipos=() =>
<>
  <div id="equipos" className="container">
    <h2>Equipos.</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Dolorum est reiciendis vitae rerum dignissimos similique rem, 
      nemo recusandae maxime nesciunt reprehenderit quidem perferendis 
      earum natus, distinctio quasi omnis esse hic!Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Dolorum est reiciendis vitae rerum dignissimos similique rem, 
      nemo recusandae maxime nesciunt reprehenderit quidem perferendis 
      earum natus, distinctio quasim omnis esse hic!Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Dolorum est reiciendis vitae rerum dignissimos similique rem, 
      nemo recusandae maxime nesciunt reprehenderit quidem perferendis
    </p> 
    <div id="productos">
      <div className="card">
        <img className="card-img-top" src="https://http2.mlstatic.com/D_NQ_NP_801526-MLA45414044891_042021-O.jpg" alt="Card image"></img>
        <div className="card-body">
          <h4 className="card-title">Lenovo Think-Pad</h4>
          <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum est reiciendis</p>
          <a href="" className="btn btn-dark">Ver Más</a>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src="https://ar-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/9/U/9UV88LA-2_T1607366181.png" alt="Card image"></img>
        <div className="card-body">
          <h4 className="card-title">HP Pavilion</h4>
          <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum est reiciendis</p>
          <a href="" className="btn btn-dark">Ver Más</a>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS8a98YcISXlnsbrCTPy8a8AfGj05BtxWR8g&usqp=CAU" alt="Card image"></img>
        <div className="card-body">
          <h4 className="card-title">Apple MacBook Pro</h4>
          <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum est reiciendis</p>
          <a href="" className="btn btn-dark">Ver Más</a>
        </div>
      </div>
    </div>
  </div>
</>;

const Precios = () => 
<>
  <div id="precios" className="container">
    <h2>Lista de Precios.</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Dolorum est reiciendis vitae rerum dignissimos similique rem, 
      nemo recusandae maxime nesciunt reprehenderit quidem perferendis 
      earum natus, distinctio quasi omnis esse hic!Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
      Dolorum est reiciendis vitae rerum dignissimos similique rem
    </p>

    <table className="table">
    <thead>
      <tr>
        <th>Marca</th>
        <th>Modelo</th>
        <th>Precio</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Lenovo</td>
        <td>Think-Pad i7 16GB</td>
        <td>AR$180.000</td>
      </tr>
      <tr>
        <td>Hewlet-Packard</td>
        <td>Pavilion i5 8GB</td>
        <td>AR$140.000</td>
      </tr>
      <tr>
        <td>Apple</td>
        <td>MacBook Pro i9 16GB</td>
        <td>AR$700.000</td>
      </tr>
    </tbody>
  </table>
  </div>
</>;

const Footer =() => 
<>
  <footer className="bg-dark text-white">Autor de la Página: Mariano Cataldi</footer>
</>;

ReactDOM.render(<Aplicacion />,document.getElementById('root'));
