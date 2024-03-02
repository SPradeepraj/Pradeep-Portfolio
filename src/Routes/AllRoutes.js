import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Headers from '../Components/Layouts/Headers';
import Footers from '../Components/Layouts/Footers';
import Home from '../Components/Pages/Home';

const AllRoutes = () => {
    return (
        <div>
            <Headers />
            <div>
                <Router>
                    <Routes>
                        <Route path='/' element={<Home />} />
                    </Routes>
                </Router>
            </div>
            <Footers />
        </div>
    );
}

export default AllRoutes;
