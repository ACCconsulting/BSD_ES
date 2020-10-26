import {
    LIST_VECHICLE,
    LIST_VECHICLE_SUCCESS,
    LIST_VECHICLE_ERROR,
    ADD_VECHICLE,
    BUTTON_NEW,
    ADD_VECHICLE_SUCCES,
    ADD_VECHICLE_ERROR,
    GET_OBJECT_UPDATE,
    EDIT_VECHICLE,
    EDIT_VECHICLE_SUCCESS,
    EDIT_VECHICLE_ERROR,
    DELETE_VECHICLE_ERROR,
    DELETE_VECHICLE_SUCCESS,
    DELETE_VECHICLE_BEGIN,
    TEST_LOAD
} from '../Types';

//Cada reducer tiene su propio state

const initialState= {
    objects:[],
    objectsEdit:[],
    error:null,
    loading:true,
    msjOk:null,
    save:false,
    deleteSave:null,
    total:0
}

export default function(state=initialState,action){
    switch (action.type) {
       
        case ADD_VECHICLE:
        case LIST_VECHICLE:
            return {
                ...state,
                error: null,
                objects: null,
                loading: true,
                msjOk:null,
                save:false,
                objectsEdit:null,
               
              };
        case EDIT_VECHICLE:
            return{
                // objectsEdit:action.payload,
                loading: true, 
                error: null,
                msjOk:null,
            };    
         case DELETE_VECHICLE_BEGIN:
               return {
                        ...state,
                        deleteSave:false,
                        error: null,
                      };
        case LIST_VECHICLE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                objects: action.payload.objResult,
                total:  action.payload.totalRecords,
                objectsEdit:null,
                save:false
        
              };    
         case EDIT_VECHICLE_SUCCESS:
         case ADD_VECHICLE_SUCCES:
             return {
                    ...state,
                    loading: false,
                    error: null,
                    save:true,
                    msjOk: action.payload,
                  };
        case DELETE_VECHICLE_SUCCESS:
            return {
                ...state,
                deleteSave: true,
                msjOk: action.payload,
            };
       case DELETE_VECHICLE_ERROR:
            return {
                ...state,
                deleteSave: false,
                error: action.payload,
            };
      case LIST_VECHICLE_ERROR:               
      case EDIT_VECHICLE_ERROR:     
      case ADD_VECHICLE_ERROR:
       return {
                ...state,
               loading: false,
               error: action.payload,
               save:false,
               };
      case GET_OBJECT_UPDATE:
         return {
                  ...state,
                  error: null,
                  msjOk:null,
                  deleteSave:false,
                  objectsEdit: state.objects.filter(
                    (obj) => obj.vehicleId === action.payload
                  ),
                };

        case  BUTTON_NEW:
            return{
                ...state,
                error: null,
                msjOk:null,
                deleteSave :false,
            }

        default:
            return state;
    }
}