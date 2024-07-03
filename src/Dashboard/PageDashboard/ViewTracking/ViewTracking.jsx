import React, { useState } from "react";
import SideMenu from "../../ComponentsDashboard/SideMenu/SideMenu";
import "../ViewTracking/ViewTracking.css";
import { FaEye } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import DetailedTracking from "../DetailedTracking/DetailedTracking";

const data = [
  {
    id: 1,
    trackingCode: "1714132287",
    item: "Good",
    receiver: "Anthony william Garrity",
    source: "London",
    destination: "Dubai",
    date: "03-05-2024",
  },
  {
    id: 2,
    trackingCode: "1714132287",
    item: "Good",
    receiver: "Anthony william Garrity",
    source: "London",
    destination: "Dubai",
    date: "03-05-2024",
  },
  {
    id: 3,
    trackingCode: "1714132287",
    item: "Good",
    receiver: "Anthony william Garrity",
    source: "London",
    destination: "Dubai",
    date: "03-05-2024",
  },
  // Add more data objects as needed
];

function ViewTracking() {
  const [modalShow, setModalShow] = useState(false);
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
                <th scope="col">Tracking Code</th>
                <th scope="col">Item</th>
                <th scope="col">Receiver</th>
                <th scope="col">Source</th>
                <th scope="col">Destination</th>
                <th scope="col">Date</th>
                <th scope="col">View Details</th>
                <th scope="col">View logs</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.trackingCode}</td>
                  <td>{item.item}</td>
                  <td>{item.receiver}</td>
                  <td>{item.source}</td>
                  <td>{item.destination}</td>
                  <td>{item.date}</td>
                  <td>view Details</td>
                  <td>
                    <FaEye className="eye-icon" size={23} onClick={() => setModalShow(true)} />
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
      <DetailedTracking  show={modalShow} onHide={() => setModalShow(false)}/>
    </>
  );
}

export default ViewTracking;
