import React from 'react'
import SideMenu from '../../ComponentsDashboard/SideMenu/SideMenu'

function TrackingsUpdateLogs() {
  return (
    <>
    <SideMenu/>
    <div className='container dashboard-box ' >
    <div className=''>
        <h6 className='mt-5' >Update Tracking</h6>
        <form action="">
    <div className='row'>
    <div className='col-md-5'>
        <label for="exampleFormControlInput1" class="form-label">Tracking Code</label>
        <div class="input-group">
        <input class="form-control form-control-lg" type="text" placeholder="Tracking Code" aria-label=".form-control-lg example"/>
       </div>
        </div>


       
        <div className='col-md-5'>
        <label for="exampleFormControlInput1" class="form-label">New status</label>
        <div class="input-group">
        <input class="form-control form-control-lg" type="text" placeholder="New status" aria-label=".form-control-lg example"/>
       </div>
        </div>
       
       
    </div>
    <div className='row mt-3'>
        <div className='col-md-5'>
        <label for="exampleFormControlInput1" class="form-label">New Location</label>
        <div class="input-group">
        <input class="form-control form-control-lg" type="text" placeholder="New Location" aria-label=".form-control-lg example"/>
       </div>
        </div>


       
        <div className='col-md-5'>
      <div className=''>
      <label for="exampleFormControlInput1" class="form-label">Progress</label>
      <select class="form-select" aria-label="Default select example">
  <option selected>SELECT VAULT SIZE</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
      </div>
        </div>
       
       
    </div>
    <div className='row mt-3'>
        <div className='col-md-5'>
        <label for="exampleFormControlInput1" class="form-label">Tracking Data</label>
        <div class="input-group">
        <input class="form-control form-control-lg" type="date" aria-label=".form-control-lg example"/>
</div>
        </div>


       
      
       
       
    </div>


    
   
    
    
    
    <div className='row'>
        <div className='col-md-5'>
        <button className='Send-Addvaultem my-3'>Add Trackings</button>
        </div>
        <div className='col-md-5'>
        <button className='Send-Addvaultem my-3'>Reset</button>
        </div>
    </div>
   
    </form>
    </div>
 </div>
    </>
  )
}

export default TrackingsUpdateLogs
