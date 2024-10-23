

import React from 'react'
import CustomButton from '../components/CustomButton'

const Aboutus = () => {
  return (
    <div>
        <h1>This is the about us page</h1>
        <table >
          <tr>
            <td>Name</td>
            <td>Saharsh</td>
          </tr>
          <tr>
            <td>emp id</td>
            <td>1234</td>
          </tr>
          <tr>
            <td>Organiztion</td>
            <td>Deloitte</td>
          </tr>
          <tr>
            <td>position</td>
            <td>trainee</td>
          </tr>
        </table>
        <CustomButton/>
    </div>
  )
}

export default Aboutus