import React from 'react'
import { BrowserRouter, Routes, Route, Navigate,useLocation  } from 'react-router-dom';
import Nav from '../Components/Nav/Nav';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import ShipmentSecurityBoxes from '../Pages/Shipment&SecurityBoxes/Shipment&SecurityBoxes';
import TrackShipment from '../Pages/Shipment&SecurityBoxes/TrackShipment';
import CheckYourSafety from '../Pages/Shipment&SecurityBoxes/CheckYourSafety';
import Dashboard from '../Dashboard/PageDashboard/DashoardHome/Dashboard';
import AddVaultIem from '../Dashboard/PageDashboard/AddVaultIem/AddVaultIem';
import AddTracking from '../Dashboard/PageDashboard/AddTracking/AddTracking';
import LockSite from '../Dashboard/PageDashboard/LockSite/LockSite';
import ViewTracking from '../Dashboard/PageDashboard/ViewTracking/ViewTracking';
import TrackingsUpdateLogs from '../Dashboard/PageDashboard/TrackingsUpdateLogs/TrackingsUpdateLogs';
import VaultListItem from '../Dashboard/PageDashboard/VaultListItem/VaultListItem';


// import Footer from '../Components/LogoImage/Footer/Footer';

function Routers() {
  const location = useLocation();
  // List of routes where the <Nav /> should not be displayed
  const noNavRoutes = [
    '/dashboard',
    '/addvaulitem',
    '/addtracking',
    '/LockSite',
    '/viewTracking',
    '/trackingsUpdate',
    '/vaultListItem'
  ];
  return (
    <div>
    {/* Conditionally render <Nav /> based on the current route */}
    {!noNavRoutes.includes(location.pathname) && <Nav />}
      
        
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>} />
            <Route path='/Shipment&Security' element={<ShipmentSecurityBoxes/>}/>
            <Route path='/TrackShipment' element={<TrackShipment/>}/>
            <Route path='/CheckYourSafety' element={<CheckYourSafety/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/addvaulitem' element={<AddVaultIem/>}/>
            <Route path='/addtracking'  element={<AddTracking/>}/>
            <Route path='/LockSite' element={<LockSite/>}/>
            <Route path='/viewTracking' element={<ViewTracking/>}/>
            <Route path='/trackingsUpdate' element={<TrackingsUpdateLogs/>} />
            <Route path='/vaultListItem' element={<VaultListItem/>} />
        </Routes>
        {/* <Footer/> */}
       
      
    </div>
  )
}

export default Routers
