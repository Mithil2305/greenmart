import React from 'react'
import Farmer from '../assets/Farmer.png'
import Male from '../assets/profile.png'
import loco from '../assets/Location.png'
import msg from '../assets/Chat.png'
import play from '../assets/Play.png'
import '../styles/Chat.css'

//ee6767
export const Chat = () => {
  return (
    <div className='d'>
        <img src={Farmer}></img>
        <div className="b">
            <button><img src={play}></img>Watch Tutorial</button>

        </div>
        <div className="far">
            <div className="pro">
                <img src={Male}></img>
            </div>
            <div className="about">
                <h4>Farmer Name</h4>
                <p><img src={loco}></img> Coimbatore</p>
                <p>Primary: Coconut</p>
            </div>
            <div className="btn">
                <button><img src={msg}></img> Message</button>
            </div>
        </div>
    </div>
  )
}
