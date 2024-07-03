import React from 'react'
import SideMenu from "../../ComponentsDashboard/SideMenu/SideMenu";
import "../ViewTracking/ViewTracking.css";
import { FaEye } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";


function VaultListItem() {
    const data = [
        {
          id: 1,
          image:"https://images.pexels.com/photos/366551/pexels-photo-366551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          items:"Gold",
          quantity:"36kg",
          Weight:"36kg",
          owner: "Anthony william Garrity",
          username: "admin",
          secrte: "356475",
          viewDetalis: "View details",
        },
       
        // Add more data objects as needed
      ];
  return (
    <>
    <SideMenu />
    <div className="container viewTracking-box">
      <div>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2 w-25"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
        </form>
      </div>
      <div className="tableBox">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Image</th>
              <th scope="col">Item</th>
              <th scope="col">Quantity</th>
              <th scope="col">Weight</th>
              <th scope="col">Owner</th>
              <th scope="col">UserName</th>
              <th scope="col">Secrete Code</th>
              <th scope="col">View Details</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td className='imageTd'> <img src={item.image} alt="" className='imageItem' /> </td>
                <td>{item.items}</td>
                <td>{item.owner}</td>
                <td>{item.quantity}</td>
                <td>{item.Weight}</td>
                <td>{item.username}</td>
                <td>{item.secrte}</td>
                <td>view Details</td>
                <td>
                  <FaEye className="eye-icon" size={23} />
                </td>
                <td>
                  <div className="dropdown-container">
                    <BsThreeDotsVertical className="dot-icon" size={27} />
                    <div className="dropdown-menu">
                      <ul>
                        <li>
                          <RiDeleteBin6Fill />
                          Delete
                        </li>
                        <li>
                          <CiEdit />
                          Edit
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </>
  )
}

export default VaultListItem