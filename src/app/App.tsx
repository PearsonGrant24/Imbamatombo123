import React, {useEffect} from 'react';
import RoutePath from './routes/RoutePath.tsx';
import './assets/App.scss';
import  Footer  from './components/layout/footer/Footer.tsx';
import Header  from './components/layout/header/Header.tsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home.tsx';

// type AppProps = {
//   basename: string
// }

const App = () => {
    
    return (
    
      <BrowserRouter>
          {/* <Header> */}
            {/* <> */}
                {/*  Logo, Header navigation, Search   */}
            {/* </>
              div
          </Header> */}
          {/* <div className='page d-flex flex-row flex-column-fluid'> */}
          <Header/>
          {/* <Header/ */}
          {/* <Route path = '/' element={() => <Home/>} /> */}
          <RoutePath />
          <Footer/>
          {/* <Footer> */}
            <>
              {/*  Logo, Quick Links, Social Links, Subscribe, Copyrights   */}
            </>
          {/* </Footer> */}
          {/* </div> */}
          </BrowserRouter>
    
  );
  
}

export default App;
