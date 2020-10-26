
import React, { memo } from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";


import moment from 'moment';
import 'moment/locale/es-mx';

import { Form, Input, Button,DatePicker, Space ,Spin } from 'antd';

import UseNotification from '../helper/UseNotification';
  
  // moment.locale('es');


const Infovehicle = ({onFinish}) => {
    const [form] = Form.useForm();
    const dateFormat = "YYYY/MM/DD";
    const{notificacion}= UseNotification();
   
    const { objectsEdit,loading } = useSelector(
      (state) => state.crud
    );
    

  if(objectsEdit){
  console.log(objectsEdit[0]);
  objectsEdit[0].fechaEntrega= moment(objectsEdit[0].fechaEntrega);
  console.log(objectsEdit[0]);
  }


function onChangeDate(date, dateString) {

  var isafter = moment(date).isAfter(new Date());
  if(!isafter){
    notificacion("warning", "Alerta", "La fecha de entrega no puede ser menor a el dia actual");

  }

  
}


    return (
      <Spin size="large" spinning={loading} >
        <Form 
        // {...formItemLayout}
        layout="vertical"
        form={form}
       
        initialValues={ objectsEdit && objectsEdit[0]}
     
        onFinish={onFinish}
      >

        <Form.Item label="Número de pedido"
        name="numeroPedido"
        rules={[{ required: true, message: "El campo es obligatorio" }]}
       
        >
          <Input placeholder="Número de pedido" />
        </Form.Item>
        <Form.Item label="Bastidor"
         name="bastidor"
         rules={[{ required: true, message: "El campo es obligatorio" }]}
        >
          <Input placeholder="Bastidor" />
        </Form.Item>
        <Form.Item label="Modelo"
        name="modelo"
        rules={[{ required: true, message: "El campo es obligatorio" }]}
        >
          <Input placeholder="Modelo" />
        </Form.Item>
        <Form.Item label="Matrícula"
         name="matricula"
         rules={[{ required: true, message: "El campo es obligatorio" }]}
        >
          <Input placeholder="Matrícula" />
        </Form.Item>
        
        <Form.Item label="Fecha de entrega"
        name="fechaEntrega"
        rules={[{ required: true, message: "El campo es obligatorio" }]}
        >
       <DatePicker format={dateFormat} onChange={onChangeDate} />
        {/* {componenteDataPick} */}
        </Form.Item>

       
        <Form.Item >    
        <Space>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Guardar
            </Button>
            <Link to="/vehicle/List">
              <Button className="login-form-button">Cancelar</Button>
            </Link>
          </Space>
        </Form.Item>
      </Form>
      </Spin>
    );
};

export default Infovehicle;