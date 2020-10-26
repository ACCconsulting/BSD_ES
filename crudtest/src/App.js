import React,{useState} from "react";
import { BrowserRouter as Ruter, Route, Switch } from "react-router-dom";
import moment from 'moment';
import 'moment/locale/es-mx';

 
//Redux
import {Provider} from 'react-redux';
import store from './store';

//
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,

} from '@ant-design/icons';



import Nav from './Components/container/Nav';
import Loginpage from './Pages/account/Loginpage';
import VehicleList from './Pages/vehicle/VehicleList';
import VehicleCreate from './Pages/vehicle/VehicleCreate';
import VehicleEdit from './Pages/vehicle/VehicleEdit';


function App() {
  moment.locale('es');
  const { Header, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false)

  const toggle =()=>{
    setCollapsed(!collapsed);
  }
  return (
    <Layout>
      <Ruter>
        <Provider store={store} >

        
      <Nav  collapsed={collapsed}/>
       
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          
              <Switch>

              <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: "80vh",
            }}
          >
                <Route exact path="/" component={Loginpage} />
         
                <Route exact path="/vehicle/List" component={VehicleList} />
                <Route exact path="/vehicle/create" component={VehicleCreate} />
                <Route exact path="/vehicle/edit/:id" component={VehicleEdit} />
          </Content>

              </Switch>

           

         
        </Layout>
        </Provider>
        </Ruter>
      </Layout>
  );
}

export default App;
