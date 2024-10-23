import React from 'react'
import CustomButton from '../components/CustomButton'
import icetea from "../Assets/Images/icetea.jpg"
import perfume from "../Assets/Images/perfume.jpg"
import watch from "../Assets/Images/watch.jpg"
const Product = () => {
  return (
    <>
    <div style={{borderColor:'black', borderWidth:3}}>
        <img width='10%' src={icetea} alt="" style={{float: 'left'}} />
        <table >
          <tr>
            <td>Name</td>
            <td>Iced tea</td>
          </tr>
          <tr>
            <td>MRP</td>
            <td>20</td>
          </tr>
          <tr>
            <td>Quantity</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>Iced tea</td>
          </tr>
        </table>
        <CustomButton name='Add to cart' bgColor='green'/>
    </div>
    <hr></hr>
    <div>
        <img width='10%' src={watch} alt="" style={{float: 'left'}} />
        <table >
          <tr>
            <td>Name</td>
            <td>Watch</td>
          </tr>
          <tr>
            <td>MRP</td>
            <td>5000</td>
          </tr>
          <tr>
            <td>Quantity</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>Watch</td>
          </tr>
        </table>
        <CustomButton name='Add to cart' bgColor='yellow' cr='black'/>
    </div>
    <br></br>
    <hr></hr>
    <div>
        <img width='10%' src={perfume} alt="" style={{float: 'left'}} />
        <table >
          <tr>
            <td>Name</td>
            <td>Perfume</td>
          </tr>
          <tr>
            <td>MRP</td>
            <td>2000</td>
          </tr>
          <tr>
            <td>Quantity</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>Perfume</td>
          </tr>
        </table>
        <CustomButton name='Add to cart' bgColor='blue' cr='white'/>
    </div>
    </>
  )
}

export default Product