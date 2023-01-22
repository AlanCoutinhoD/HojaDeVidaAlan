import Detalles from "../../assets/styles/Details.css"
import whats from"../../assets/img/whats.png";
import correo from "../../assets/img/correo.png";
import facebook from "../../assets/img/facebook.png";
const Details = () => {
    return ( 
<>

<div className="contenedor">
<h2 className="titulos">DETALLES</h2> 

<div className="imagenes"><img src={whats} className="imagenes"></img></div>
<div className="parrafo"><h1>+52 961 213 47 51</h1></div>
<div className="imagenes"><img src={correo} className="imagenes"></img></div>
<div className="parrafo"><h1>alanemmanueldiazcoutino@gmail.com</h1></div>
<div className="imagenes"><img src={facebook} className="imagenes"></img></div>
<div className="parrafo"><h1>Alan Coutinho</h1></div>
</div>

</>

     );
}
 
export default Details;