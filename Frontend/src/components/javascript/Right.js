import React from 'react'
import './css/style.css';
export default function Right() {
  return (
    <>
        <div className="topbar">
        <h3 className="Roomname">Default-Room</h3>
    </div>
    <input type="text" name="Search" id="message" placeholder="Enter your message" required />
    <div className="chatting">
        <div className="chatbox1"></div>
        <div className="chatbox1"></div>
        <div className="chatbox1"></div>
        <div className="chatbox1"></div>
        <div className="chatbox1"></div>
        <div className="chatbox2"></div>
        <div className="chatbox2"></div>
        <div className="chatbox2"></div>
        <div className="chatbox2"></div>
        <div className="chatbox2"></div>
        <div className="chatbox2"></div>
        <div className="chatbox2"></div>
        <div className="chatbox2"></div>
        <div className="chatbox2"></div>
    </div>
    </>
  )
}
