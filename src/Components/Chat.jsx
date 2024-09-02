import React from 'react'
import Farmer from '../assets/Farmer.png'
import Male from '../assets/Male User.png'
import loco from '../assets/Location.png'
import msg from '../assets/Chat.png'
import '../styles/Chat.css'

export const Chat = () => {
  return (
    <div>
        <img src={Farmer}></img>
        <button>Watch Tutorial</button>
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
