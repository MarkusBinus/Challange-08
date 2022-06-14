import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './features/Login/Login';
import Dashboard from './features/Dashboard/Dashboard';
import Home from './features/Home/Home';
import Car from './features/Car/Car';
import Add from './features/Addcar/Add';

const RouteApp = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="home" element={<Home />} />
                    <Route path="car" element={<Car />} />
                    <Route path="add" element={<Add />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteApp