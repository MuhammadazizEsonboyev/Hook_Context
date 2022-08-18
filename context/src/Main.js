import React from 'react'
import './App.css';


export default function Main({toggle}) {
    return (
        <>
         <p className='paragraf'>Hello from Context</p>   
         <button onClick={toggle} className='success'>Show Alert</button>
        </>
    )
}
