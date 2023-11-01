import './App.css';
import React from "react";
import Card from './componentes/layout/Card';
import Main from './componentes/basics/Main'
import MainProps from "./componentes/basics/MainProps";
import Login from './componentes/basics/Login';
import Father from './componentes/family/Father';
import Stepfather from './componentes/family/Stepfather';
import Son from './componentes/family/Son';

export default () => {

    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="#05 - stepfather and son" color='#006400'>
                    <Stepfather surname="Uniesp">
                        <Son name="Test stepfather 1"/>
                        <Son name="Test stepfather 2"/>
                        <Son name="Test stepfather 3"/>
                    </Stepfather>
                </Card>

                <Card titulo="#04 - Father and son" color='#DC143C'>
                    <Father surname="Uniesp"/>
                </Card>

                <Card titulo="#03 - React Fragment" color='#8A2BE2'>
                    <Login/>
                </Card>

                <Card titulo="#02 - Component with props" color='#000000'>
                    <MainProps olaMundo="Hello, world"/>
                </Card>

                <Card titulo="#01 - Main Component" color='#A52A2A'>
                    <Main/>
                </Card>
            </div>
            
        </div>
    )

}