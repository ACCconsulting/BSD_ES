import React,{useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";

import {SaveAction} from '../../_Actions/crudAction';

import InfoVechicle  from '../../Components/vehicle/Infovehicle';
import UseNotification from '../../Components/helper/UseNotification';

const VehicleEdit = (props) => {
   const dispatch = useDispatch();
    const { notificacion } = UseNotification();

    const { save, error} = useSelector(
        (state) => state.crud
      );
      
      useEffect(() => {
          if (save === true) {
            props.history.push("/vehicle/List");
            notificacion("success", "Registro Actualizado correctamente", error);
          }
          if (error && !save)
            notificacion("error", "Error al Actualizar el registro", error);
        }, [save, error]);


    const onFinish = (values) => {
        var id = props.match.params.id;
        var url=`/vehicle/${id}`;
         dispatch(SaveAction("put",url,values,"EDIT_VECHICLE","EDIT_VECHICLE_SUCCESS",
         "EDIT_VECHICLE_ERROR","EDIT_VECHICLE_ERROR","Error al intentar actualizar el registro"));
        console.log('Editar',values);
      };

    return (
        <>
        <h1>Editar Vehiculo</h1>
        <InfoVechicle onFinish={onFinish}/>
        
        </>
    );
};

export default VehicleEdit;