import React from 'react'
import '../styles/Login.css'

export const Login = () => {
  return (
    <div>
        <div className='log'>

            <h1>GreenMart</h1>
            
            <form>

            <select className='sel'>
                <option>English</option>
                <option>Tamil</option>
                <option>Hindi</option>
                <option>Malayalam</option>
                <option>Kanada</option>
                <option>Kannada</option>
                <option>Telugu</option>
                <option>Marathi</option>
                <option>Gujarati</option>
            </select>
            
            <select className='sel'>
                <option>Chennai</option>
                <option>Thanjavur</option>
                <option>Coimbatore</option>
                <option>Thiruvarur</option>
                <option>Salem</option>
                <option>Trichy</option>
            </select>
            
            <input placeholder='Enter Mobile Number' type='phone'/>
            <input placeholder='Enter OTP' type='number'/>
            
            </form>

            <h2>OR</h2>

           <a href='#'><h2>Call us : 055-599-788</h2></a>

        </div>
    </div>
  )
}
