import React, { Suspense, lazy } from 'react';
import { Routes,  Route, Router } from 'react-router-dom';
// const Home = lazy(() => import("../components/pages/Home.tsx"));
import Home from '../components/Home.tsx'
import AboutUs from '../components/AboutUs.tsx';

const RoutePath = () => {
 
	return (
		// <Suspense fallback={<Loader />}>
		// <BrowserRouter>
		
		<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
		<Route path="/Home" element={<Home />} />
        </Routes>
		
		// </BrowserRouter>
		// </Suspense>
	);
	
};

export default RoutePath;
