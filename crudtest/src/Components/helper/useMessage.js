import Reac from 'react';

export default function useMessage(){
   const  messageError = "Error al intentar guardar el registro";
   const messageCreate = "Registro Guardado Correctamente";
   const messageUpdate = "Registro Actualizado Correctamente";
   const messageDelete = "Error al intentar eliminar el registro";

   return{
    messageError,
    messageCreate,
    messageUpdate,
    messageDelete
}
}
