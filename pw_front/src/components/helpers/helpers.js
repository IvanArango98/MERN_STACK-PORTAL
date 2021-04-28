import { isUndefined }  from 'util'
import axios from 'axios'
import Cookies from 'universal-cookie'
import {APIHOST as host} from '../../App.json'

const cookies = new Cookies();

//que calcula que el token expire en 30 mins
export function calculaExpiracionSesion()
{
    const now = new Date().getTime();
    const newDate = now + 60 * 30 * 1000
    return new Date(newDate)
}

//metodo que valida si la sesion ya finalizo
export function getSession()
{
    return isUndefined(cookies.get("_s")) ? false : cookies.get("_s")
}

//metodo que redirecciona al login si el token paso sus 30 mins
function renovarSesion()
{
    const sesion = getSession()
    if(!sesion)    
        window.location.href = "/login"
    
    cookies.set("_s",sesion,{
        path: "/", 
        expires: calculaExpiracionSesion()     
    })

    return sesion;
}

//metodo que renovara la peticion hacia la url que se desea consumir
export const request = {
    get: function(service){
        let token = renovarSesion()
        return axios.get(`${host}${service}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },

    post: function(service, data){
        let token = renovarSesion()
        return axios.post(`${host}${service}`, data ,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },

    put: function(service, data){
        let token = renovarSesion()
        return axios.put(`${host}${service}`, data ,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
,
    delete: function(service){
        let token = renovarSesion()
        return axios.delete(`${host}${service}` ,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}

//metodo post crearUsuarios
  export async function saveUsuario (usuario) {    
      const formData = new FormData()
  
      formData.append('nombre', usuario.nombre)
      formData.append('apellido', usuario.apellido)
      formData.append('mail', usuario.mail)
      formData.append('pass', usuario.pass)
      formData.append('FechaNacimiento', usuario.FechaNacimiento)
      formData.append('image', usuario.image)
      formData.append('carrera', usuario.carrera)
      
      try {      
      const response = await axios({
        url: `${host}/CrearUsuario`,
        method: 'POST',
        data: formData,
      })     
    }
    catch{
        alert("Error al crear usuario");
    }
  
  }

