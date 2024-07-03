import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import '../SideMenu/SideMenu.css';

import { MdOutlineStreetview } from "react-icons/md";

import { MdSpatialTracking } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa6";
import { CgPlayListAdd } from "react-icons/cg";import { HiUserGroup } from "react-icons/hi";
import { MdPreview } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";

import { IoIosNotifications } from "react-icons/io";
import { MdDashboardCustomize } from 'react-icons/md';



function SideMenu() {
  

  return (
    <>
      <div className='navbar'>
        <img src="" width="100" height="64"  />
        <div className='d-flex gap-4 me-5'>
          <div className='notification-icon-container'>
            <IoIosNotifications size={30} className='mt-4' />
            <div className='notification-count'>3</div>
          </div>
          <div>
            {/* <img src={profile} alt="" className='rounded-circle mt-3' /> */}
          </div>
          <div>
            <NavDropdown title="Hi," id="basic-nav-dropdown" className='mt-4 navdrop'>
              <NavDropdown.Item as={Link} to="/Account" href="#profile">Profile</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to={"/callorder"}> My Orders History </NavDropdown.Item>
              <NavDropdown.Divider />
              {/* <NavDropdown.Item >Logout</NavDropdown.Item> */}
            </NavDropdown>
          </div>
        </div>
      </div>

      <nav className= "nav-menu active" >
        <ul className='nav-menu-items'>
          <li className="navbar-toggle">
            <div to="#" className='menu-bars'>
              {/* <img src={frankoIcon} width="100" height="64"  /> */}
            </div>
          </li>

          <li className="nav-text">
            <Link to="/dashboard">
              <MdDashboardCustomize size={18} />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-text mt-">
            <Link to="/addtracking">
              <FaAddressCard  size={18} />
              <span>Add Trackings</span>
            </Link>
          </li>
          <li className="nav-text mt-">
            <Link to="/viewTracking">
              <MdOutlineStreetview  size={18} />
              <span> View Tracking</span>
            </Link>
          </li>
          {/* <NavDropdown className="nav-lists py-3" title={<span><GiStorkDelivery size={18} /><span className='order-lits'>Orders</span></span>} id="orders-nav-dropdown" >
            <NavDropdown.Item as={Link} to="/orders" className='order-TextLIst' >Orders</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/callCenter" className='order-TextLIst' > Call Centre Orders</NavDropdown.Item>
            <NavDropdown.Item as={Link}  to="/orderList" className='order-TextLIst'>  List</NavDropdown.Item>
          </NavDropdown> */}
          <li className="nav-text mt-">
            <Link to="/trackingsUpdate">
              <MdSpatialTracking size={18} />
              <span>Tracking Update logs</span>
            </Link>
          </li>
          {/* <NavDropdown className="nav-lists py-3" title={<span><MdOutlineViewCarousel  size={18} /><span className='order-lits'>Carousel</span></span>} id="orders-nav-dropdown" >
            <NavDropdown.Item as={Link} to="/carousel" className='order-TextLIst' > Web Carousel</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/appcarouel" className='order-TextLIst' > App Carousel</NavDropdown.Item>
            <NavDropdown.Item as={Link}  to="/orderList" className='order-TextLIst'>  List</NavDropdown.Item>
          </NavDropdown> */}
          {/* <li className="nav-text mt-">
            <Link to="/carousel">
              <MdOutlineViewCarousel size={18} />
              <span>Carousel</span>
            </Link>
          </li> */}
          <li className="nav-text mt-">
            <Link to="/addvaulitem">
              <CgPlayListAdd size={18} />
              <span>Add vault item</span>
            </Link>
          </li>
          <li className="nav-text mt-">
            <Link to="/vaultListItem">
              <MdPreview size={18} />
              <span>View Vault items</span>
            </Link>
          </li>
          {/* <li className="nav-text mt-">
            <Link to="/report">
              <TbReport size={18} />
              <span></span>
            </Link>
          </li> */}
          <li className="nav-text mt-3">
            <Link to="#">
              <IoMdLogOut size={18} />
              <span >Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SideMenu;
