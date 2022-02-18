import './App.css';
import {Ride} from './components/Ride/ride';
import 'bootstrap/dist/css/bootstrap.min.css';
import {rides} from './data/Ride';
import {user} from './data/User';
import Header from './components/Header/header';
import NearestRides from './views/NearestRides';
import UpcomingRides from './views/UpcomingRides';
import PastRides from './views/PastRides';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';

function App() {
    function filterByNearestRide(val) {
        return rides
            .map(i => i.station_path)
            .flat()
            .filter(f => f >= val - 5 && val <= val + 5);
    };
    console.log(filterByNearestRide(user.station_code));
    let currentDate = new Date().getTime();
    const filterByPastRide = rides.filter((item) => item.date < currentDate);
    const filterByUpcoimingRide = rides.filter((item) => item.date > currentDate);

    return (

        <BrowserRouter basename="/">
            <Header/>
            <Routes>
                <Route
                    path="/"
                    element={< NearestRides rides = {
                    rides
                } />}
                    exact/>
                <Route
                    path="/upcoming"
                    element={< UpcomingRides rides = {
                    filterByUpcoimingRide
                } />}
                    exact/>
                <Route
                    path="/past"
                    element={< PastRides rides = {
                    filterByPastRide
                } />}
                    exact/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;