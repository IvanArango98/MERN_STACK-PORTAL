import React, { useState } from 'react';
import './acciones.css'
import {Image} from 'react-bootstrap'
import {request} from '../helpers/helpers'
import Cookies from 'universal-cookie'
import jwt_decode from 'jwt-decode';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';

const Prev = JSON.parse(localStorage.getItem('URLIMG'))
var img = null
const cookies = new Cookies();

function Validar()
{
    const Actualizar = JSON.parse(localStorage.getItem('Actualizar'))    
    if(Actualizar != null)    
    {
        let token = cookies.get("_s")
        let decoded = jwt_decode(token);
        let id = decoded.id 

        var subir = {
            nombre: Actualizar.nombre,
            apellido: Actualizar.apellido,
            FechaNacimiento: Actualizar.FechaAc,
            carrera: Actualizar.carrera,
            mail: Actualizar.mail,
            image: img,
            pass: Actualizar.nombre
        }
                    
        request.put(`/Usuario/${id}`,subir).then( response => { 

            alert(response.data.msg)
            localStorage.removeItem('Actualizar');
            window.location.href = "/Portal"            

        }).catch(err => {
            console.error(err)            
            this.setState({loading:false});
        }) 
    }
}

  // On file upload (click the upload button) 
  function onFileUpload (image) { 
      try{      
    // Create an object of formData 
    const formData = new FormData(); 
   
    // Update the formData object 
    formData.append( 
      "myFile", 
      image, 
      image.name 
    );   
    img = image  
      }
      catch
        {                
            alert("Error al cargar imagen.")
        }         
  };


const ImgPrev = (props) => {
    const [{alt, src}, setImg] = useState({
        src: Prev.img,
        alt: 'Upload an Image'
    });
    

    const handleImg = (e) => {
        if(e.target.files[0]) {
            setImg({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name
            });                
        }      
        onFileUpload(e.target.files[0])                        
    }

    return (
<>
        <form encType="multipart/form-data">            
            <div className="form__img-input-container">         

            <br></br>                                            
                <Image src={src}  thumbnail   alt={alt} className="form-img__img-preview"/>                
            <hr></hr>
                <input 
                    type="file" 
                    accept=".png, .jpg, .jpeg" 
                    id="photo" 
                    className="visually-hidden"
                    onChange={handleImg}
                />
            </div>            
        </form>
        {
            Validar()
        }
        </>
    );
}

export default ImgPrev;