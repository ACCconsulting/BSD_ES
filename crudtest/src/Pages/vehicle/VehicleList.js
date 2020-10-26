import React,{useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
//
import moment from 'moment';
//
import { Table, Tag, Space,Button, Tooltip,Popconfirm,Spin,  } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import {VehiclelistAction,GetVehicleEditAction,deleteAction,buttonNewAction} from '../../_Actions/crudAction';

import UseNotification from '../../Components/helper/UseNotification';
import UseMessage  from '../../Components/helper/useMessage';
import CustomAlert   from  '../../Components/helper/CustomAlert';
const  VehicleList =()=> {
const {notificacion} = UseNotification();
const{ messageDelete} = UseMessage();

  const history = useHistory();
  const dispatch = useDispatch();

  const { objects,total,deleteSave,loading,error,msjOk } = useSelector(
    (state) => state.crud
  );

  useEffect(() => { 
    dispatch(VehiclelistAction());
  }, []);


  useEffect(() => {
    if (deleteSave === true) {
      notificacion("success", "Eliminado", msjOk);
      dispatch(VehiclelistAction());
    }
   
  }, [deleteSave]);

    const columns = [
        {
          title: 'Id',
          dataIndex: 'vehicleId',
          key: 'vehicleId',
         
        },
        {
          title: 'Pedido',
          dataIndex: 'numeroPedido',
          key: 'numeroPedido',
        },
        {
          title: 'Bastidor',
          dataIndex: 'bastidor',
          key: 'bastidor',
        },
        {
          title: 'Modelo',
          dataIndex: 'modelo',
          key: 'modelo',
        }
        ,
        {
          title: 'Matrícula',
          dataIndex: 'matricula',
          key: 'matricula',
        },
        {
          title: 'Fecha de Entrega',
          dataIndex: 'fechaEntrega',
          key: 'fechaEntrega',
          render: text => moment(text).format("DD/MM/YYYY"),
        },
        {
          title: 'Acción',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <Button type="link" onClick={() => Editar(record.vehicleId)}>
            Editar
          </Button>
          <Popconfirm
            title="¿Estas seguro de eliminar el registro?"
            okText="Si"
            cancelText="No"
            onConfirm={() => confirmDelete(record.vehicleId)}
          >
            <Button type="link" danger>
              Eliminar
            </Button>
          </Popconfirm>
            
            </Space>
          ),
        },
      ];

 
      const Editar = (id) => {
         dispatch(GetVehicleEditAction("GET_OBJECT_UPDATE",id));
        history.push(`/vehicle/edit/${id}`);
      };
    
      const Nuevo = () => {
        dispatch(buttonNewAction("BUTTON_NEW"));
        history.push("/vehicle/create");
      };
 function confirmDelete(id) {
  var urlAction = `/vehicle/${id}`
    dispatch(deleteAction("delete",urlAction,"DELETE_VECHICLE_BEGIN",
    "DELETE_VECHICLE_SUCCESS","DELETE_VECHICLE_ERROR","DELETE_VECHICLE_ERROR",messageDelete));
  
  }

    return (
      <>
 <Tooltip title="Nuevo registro" >
      <Button type="primary" shape="circle" icon={<PlusOutlined />}  style={{
              marginBottom: '20px',
            }} 
            onClick={() => Nuevo()}
            />
    </Tooltip >
    <Spin size="large" spinning={loading} >
      { error&& <CustomAlert message={error} type="error" />}
    {/* <CustomAlert message={error} type="error" /> */}
  
    <Table
     columns={columns}
      dataSource={objects}
      size="small"
      pagination={{ total:{total} }}
      />
    </Spin>
      

       </>
    )
}
export default VehicleList;
