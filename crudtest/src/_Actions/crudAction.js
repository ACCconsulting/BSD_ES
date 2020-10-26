import {
    LIST_VECHICLE,
    LIST_VECHICLE_SUCCESS,
    LIST_VECHICLE_ERROR,
    ADD_VECHICLE,
    ADD_VECHICLE_SUCCES,
    ADD_VECHICLE_ERROR,
    GET_OBJECT_UPDATE,
    EDIT_VECHICLE_SUCCESS,
    EDIT_VECHICLE_ERROR,
    DELETE_VECHICLE_ERROR,
    DELETE_VECHICLE_SUCCESS,
    DELETE_VECHICLE_BEGIN,
    TEST_LOAD
} from '../Types';

import ClienteAxios from "../configAxios/HttpCliente";

export function VehiclelistAction(){
    return async (dispatch)=>{
        dispatch(VehicleList);
        try {
            const response = await ClienteAxios.get("/Vehicle");
            console.log(response.data);
            switch (response.data.result) {
              case "Ok":
                dispatch(vehicleListExitoso(response.data));
                break;
                case "Error":
                  dispatch(VehicleListError(response.data.message));
                  break;
              default:
                dispatch(VehicleListError('Ocurrio un error al intentar obtener el listado'));
                break;
            }
          
        } catch (ex) {
            if (ex.response) {
                console.log(ex);
                dispatch(VehicleListError(ex));
              } else if (ex.request) {
                  
                dispatch(VehicleListError("No se logro la comunicacion con el servidor"));
               
              } else {
                dispatch(VehicleListError("Ocurrio un error al crear su cuenta"));
                
              }
        }
    }
}

const VehicleList = () => ({
    type: ADD_VECHICLE ,
    payload: true,
  });
  
const vehicleListExitoso = (data) => ({
    type: LIST_VECHICLE_SUCCESS,
    payload: data,
  });

  const VehicleListError = (msj) => ({
    type: LIST_VECHICLE_ERROR ,
    payload: msj,
  });


  export function GetVehicleEditAction(type,data) {
    return (dispatch) => {
      dispatch(optionType(type,data));
    };
  }
  const getVehicleEdit = (id) => ({
    type: GET_OBJECT_UPDATE,
    payload: id,
  });




  

  






//Dynamic
//any savae with data
export function SaveAction(
  type,
  apiurl,
  dataSend,
  typeBegin,
  typeOk,
  typevalidation,
  typerror,
  msjErrorCustom
) {
  return async (dispatch) => {
    dispatch(optionType(typeBegin, dataSend));
    try {
      const response = await ClienteAxios[type](apiurl, dataSend);
  
      switch (response.data.result) {
        case "Ok":
          dispatch(optionType(typeOk, response.data.message));
          break;
        case "Validation":
        case "Error":
        case "NoData":
          dispatch(optionType(typerror,response.data.message));
          break;
      
        default:
          dispatch(
            optionType(typerror, msjErrorCustom)
          );
          break;
      }
    } catch (ex) {
      if (ex.response) {
        optionType(typerror, msjErrorCustom);
      } else if (ex.request) {
        dispatch(
          optionType(typerror, msjErrorCustom)
        );
      }
    }
  };
}

//any delete
export function deleteAction(
  type,
  apiurl,
  typeBegin,
  typeOk,
  typevalidation,
  typerror,
  msjErrorCustom
) {
  return async (dispatch) => {
    dispatch(optionType(typeBegin));
    try {
      const response = await ClienteAxios[type](apiurl);
      console.log(response);
      switch (response.data.result) {
        case "Ok":
          dispatch(optionType(typeOk, response.data.message));
          break;
        case "Validation":
        case "Error":
        case "NoData":
          dispatch(optionType(typerror,response.data.message));
          break;
      
        default:
          dispatch(
            optionType(typerror, msjErrorCustom)
          );
          break;
      }
    } catch (ex) {
      if (ex.response) {
        optionType(typerror, msjErrorCustom);
      } else if (ex.request) {
        dispatch(
          optionType(typerror, msjErrorCustom)
        );
      }
    }
  };
}

export  function buttonNewAction(type){
return (dispatch)=>{
  dispatch(optionType(type));
}
}

const optionType = (type, data) => ({
  type: type,
  payload: data,
});
