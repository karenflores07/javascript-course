 import "./footer.css";     
const coloresVivos= {
    color:"green ",
    backgroun:"yellow",
    fontSize:"18px",
    fontFamily
} 
const coloresNeutros ={
  color:"black",
  backroundColor:"white",

}
const frasesEnamorar ={
  color:"red",
  backgroundColor:"pink",
  fontSize:18,
}

      //        { year, cohorte }
         export const Footer = ( { year , cohorte:ch ,inLove}  ) => {
            return (
              <div>
                <p className="textFooter">Footer de mi aplicación</p>
                <p style={{color:yellow , fontFamily :Arial}} >Año {year}, Cohorte {ch}</p>
                <p style = { inLove ? coloresVivos : coloresNeutros  }  >Feliz 14 de febrero, también el 15, 16 y todos días</p>
          { /* Frase para enamorar, agregar estilo inline */}
          <p style={{frasesEnamorar}}> La mayor felicidad de la vida es la convicción de que somos amados, amados por nosotros mismos, o más bien, amados a pesar de nosotros mismos.</p>
             
              </div>


            );
          };
          