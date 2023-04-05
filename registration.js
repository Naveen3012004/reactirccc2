import React from 'react'
import {TextField} from '@mui/material'
import {Button} from '@mui/material'

function Registration() {
  return (
    <div>
      <form>
        <label><h3>Name</h3></label>
        <TextField required id="filled-basic"  variant="filled" sx={{width: "400px"}}/>
        <label><h3>Email</h3></label>
        <TextField id="filled-basic"  variant="filled" sx={{width: "400px"}}/>

        <label><h3>Phone</h3></label>
        <input type="tel" style={{width: '190px', height: "30px"}}/>
        <label><h3>Passport</h3></label>
        <input type="file" />
        <label><h3>Travel date</h3></label>
        <input type="date" />
        <label><h3>Return date</h3></label>
        <input type="date" />
        <label><h3>Destination</h3></label>
        <TextField id="filled-basic"  variant="filled" sx={{width: "400px"}}/>

        <label><h3>Reason for travel</h3></label>
        <TextField id="filled-basic"  variant="filled" sx={{width: "400px"}}/>
        <br /><br />

        <Button onClick={()=>{alert('Form is successfully submitted!')}} variant = "contained" color="error" sx={{backgroundColor: '	#7B1818', padding: '10px', width: "200px"}}>Submit</Button>

      </form>
      <br /><br />
    </div>
  )
}

export default Registration