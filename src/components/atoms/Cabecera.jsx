import Header from "../../assets/styles/Header.css"
import computadora from "../../assets/img/pc.png"
import Alan from "../../assets/img/Alan.png";
const Cabecera = () => {
    return ( 
        <> 
        <div class="header">
        <div class="cuadrado"></div>
        <div class="circulo"></div>
        <img className="imagen" src={Alan} ></img>
        <div class="nombre">
            <h1>ALAN EMMANUEL DIAZ COUTIÑO</h1>
        <div className="carrera"><h3>ING. EN SOFTWARE </h3></div>
        </div>
        <div className="separador"></div>
        <img className="computadora" src={computadora}></img>
              </div>
           
              </>
       
       
     );
}
 
export default Cabecera;