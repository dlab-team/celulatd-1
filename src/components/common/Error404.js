import React from "react";
import "../../../src/scssWeb/main.css";
import Movil404 from '../../assets/img/movil404.svg'
// import Dktp404 from '../../assets/img/dktp404.svg'


const Error404 = () => {
return (
<div className="container-error">
<div className="container-error-movil">
<img src={Movil404} alt="pagina no encontrada" />
</div>

{/* <div className="container-error-desktop">
<img src={Dktp404} />
</div> */}
</div>
);
};
export default Error404;