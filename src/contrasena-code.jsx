import React from 'react'
import { useState } from 'react';
import "./contrasena.css"
function Contrasena() {

    const [contrasena, setContraena] = useState('')
    const [longitud, setLongitud] = useState(0)
    const [numeros, setNumeros] = useState(0)
    const [mayusculas, setMayusculas] = useState(0)
    const [minusculas, setMinusculas] = useState(0)
    const [simbolos, setSimbolos] = useState(0)
    const [caracteres, setCaracteres] = useState(0)
    const [contraSegura, setContraSegura] = useState(false)


    function handleChange(e){
        setContraena(e.target.value)
        console.log(e.target.value)
    }


    const regexNum = /^.*[0-9]+.*$/;
    const regexMin = /^.*[a-z]+.*$/;
    const regexMay = /^.*[A-Z]+.*$/;
    const regexCaracteres = /^.*[\[,\], \{, \}, \/, \\, \(, \)]+.*$/
    const regexSimbolos = /^.*[!,%,&,%,?,\$]+.*$/



    function Validar(){
        setLongitud(false)
        setCaracteres(false)
        setNumeros(false)
        setMayusculas(false)
        setMinusculas(false)
        setSimbolos(false)
        setContraSegura(false)

        var cont = 0
        if(contrasena.length >= 10){
            setLongitud(true)
            cont++
        }

        if(contrasena.match(regexMay)){
            setMayusculas(true)
            cont++
        }

        if(contrasena.match(regexMin)){
            setMinusculas(true)
            cont++
        }

        if (contrasena.match(regexNum)){
            setNumeros(true)
            cont++
        }

        if (contrasena.match(regexCaracteres)){
            setCaracteres(true)
            cont++
        }

        if (contrasena.match(regexSimbolos)){
            setSimbolos(true)
            cont++
        }

        if(cont === 6){
            setContraSegura(true)
        }
    }



  return (
    <div className='formulario'>
        <img src="https://www.cuatromedios.com/media/5smjq5S3yV/original/logo-akky-transparente-320-180.png" />

        <div>
            <label>
                Contraseña
                <input type="password" id='claveActual' value={contrasena} onChange={handleChange}/>
            </label>
            <input type="button" onClick={Validar} value="Validar"/>
            {
                longitud === false ? <p>La longitud minima debe ser de 10 caracteres</p> : <div></div>
            }
            {
                numeros === false ? <p>La contraseña debe tener al menos un numero</p> : <div></div>
            }
            {
                mayusculas === false ? <p>La contrasena debe tener al menos una mayuscula</p>: <div> </div>
            }
            {
                minusculas=== false ? <p>La contrasena debe tener al menos una minuscula</p>: <div> </div>
            }
            {
                simbolos === false ? <p>La contrasena debe tener al menos un símbolo como !$%&?</p>: <div></div>
            }
            {
                caracteres === false ? <p>La contrasena debe tener al menos un caracter especial como [],(),/\</p> : <div></div>
            }
            {
                contraSegura === true ? <div>
                    <center>
                        <p className='Segura'>¡FELICIDADES! </p>
                        <p className='Segura'>Tu contraseña es segura</p>
                    </center>
                    </div> : <div></div>
            }
        </div>
    </div>
  );
}

export default Contrasena;
