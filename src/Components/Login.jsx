import React from 'react'
import '../styles/Login.css'
import Location from '../assets/Location.png'

export const Login = () => {
  return (
    <div>
        <div className='log'>

            <h1>GreenMart</h1>
            <form>
              <div className='selp'>
              <div className='sel'>
              <select >
                  <option><img src={Location}/>  English</option>
                  <option>Tamil</option>
                  <option>Hindi</option>
                  <option>Malayalam</option>
                  <option>Kanada</option>
                  <option>Kannada</option>
                  <option>Telugu</option>
                  <option>Marathi</option>
                  <option>Gujarati</option>
              </select>

              </div>
            <div className='sel'>
            <select>
                <option>Chennai</option>
                <option>Thanjavur</option>
                <option>Coimbatore</option>
                <option>Thiruvarur</option>
                <option>Salem</option>
                <option>Trichy</option>
            </select>

            </div>
              </div>
            <div className="in">
            <input placeholder='Enter Mobile Number' type='phone'/>
            <input placeholder='Enter OTP' type='number'/>

            </div>

            <button className='submit' type='submit'>Login</button>
            
            </form>

            <h2>Or</h2>

           <a href='#'><h2>Call us : 055-599-788</h2></a>

        </div>
      </div>
  )
}
