import React from 'react'
import back from '../assets/Back Arrow.png'
import play from '../assets/Play.png'
import flash from '../assets/Flash On.png'
import '../styles/ImEx.css'

export const ImEx = () => {
  return (
    <>
    <div>
    <div className='m'>
        <img src={back}></img>
        <div className="b1">
            <button><img src={play}></img>Watch Tutorial</button>
        </div>
    </div>
    <div className='im'>
    <div className='btn2'>
        <button>Import</button>
        <button>Export</button>
    </div>
    <div className='info'>
    <form>
        <input type='text' placeholder='From'></input>
        <input type='text' placeholder='To'></input>
        <br/>
        <select>
            <option>Product 1</option>
            <option>Product 2</option>
            <option>Product 3</option>
            <option>Product 4</option>
            <option>Product 5</option>
        </select>
        <br/>
        <input type='date' placeholder='Pickup Date'></input>
    </form>
    </div>
    <div className='detail'>
        <div className='word'>
            <h4>Estimated Total</h4>
            <br/>
            <p>GST</p>
            <p>CGST</p>
            <p>Transport Fee</p>
            <p>Service Fee</p>
            <br/>
            <h5>You Have to Pay</h5>
        </div>
        <div className='no'>
            <h4>31,500.25</h4>
            <br/>
            <p>100.0</p>
            <p>100.0</p>
            <p>100.0</p>
            <p>100.0</p>
            <br/>
            <h3>31,900.25</h3>
        </div>
    </div>
    <div className='btnE'>
    <button>Move items<img src={flash}></img></button>
    </div>

    </div>

    </div>

    </>
  )
}
