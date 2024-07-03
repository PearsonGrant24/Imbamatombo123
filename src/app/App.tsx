import React, {useEffect} from 'react';
import RoutePath from './routes/RoutePath.tsx';
import './assets/App.scss';
import  {Footer}  from './components/layout/footer/Footer.tsx';
import {Header}  from './components/layout/header/Header.tsx';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home.tsx';
import { basename } from 'path';

type AppProps = {
  basename: string
}

//const App = () => {
const App: React.FC<AppProps> = ({basename}) => {
    return (
    <>
          <Header>
            <>
                {/*  Logo, Header navigation, Search   */}
            </>
              
          </Header>
          <RoutePath />
          <Footer>
            <>
              {/*  Logo, Quick Links, Social Links, Subscribe, Copyrights   */}
            </>
          </Footer>
    </>
    
  );
  
}

export default App;
