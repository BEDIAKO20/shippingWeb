import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


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

function DetailedTracking(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

  return (
    <>
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Detailed Trackingig
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>SHIPMENT TRACKING DETAILS</h4>
        <table class="table table-bordered">
 
  <tbody>
  {data.map((item) => (
                <tr key={item.id}>
                     <td>TRACKING ID</td>
                  <td>{item.trackingCode}</td>
                  
                </tr>
              ))}
  
  
  </tbody>
</table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default DetailedTracking
