import React,{useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";

import {SaveAction} from '../../_Actions/crudAction';

import InfoVechicle from '../../Components/vehicle/Infovehicle';
import UseNotification from '../../Components/helper/UseNotification';
import useMessage       from '../../Components/helper/useMessage';

const VehicleCreate = (props) => {

  const { notificacion } = UseNotification();
  const {messageError} = useMessage();
  const dispatch = useDispatch();

  const { save, error} = useSelector(
    (state) => state.crud
  );

useEffect(() => {
    if (save === true) {
      props.history.push("/vehicle/List");
      notificacion("success", "Registro creado correctamente", error);
    }
    if (error && !save)
      notificacion("error", "Error al crear el registro", error);
  }, [save, error]);
    
    const onFinish = (values) =>
     {
        dispatch(
          SaveAction("post","/Vehicle/create",values,"ADD_VECHICLE",
          "ADD_VECHICLE_SUCCES","ADD_VECHICLE_ERROR","ADD_VECHICLE_ERROR",messageError

        ));
        
      };

     

    return (
        <>
        <h1>Nuevo Vehiculo</h1>
         < InfoVechicle  onFinish={onFinish}/>
        </>

       
    );
};

export default VehicleCreate;