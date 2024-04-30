'use client'
import styles from "./style.css";

export default function Navbar(){ //navbar componet
    return(
     <div className='navbar'>
        <img src='stupid.png' alt='' className='nav-logo' />
        <h1 className='nav-title'>Catchy Crushers</h1>
        <a onClick={
            () => {
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
                })
            }
        } className='nav-link'>More Information</a>
    </div>
    );
 }