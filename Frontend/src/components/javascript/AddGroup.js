
import './css/style.css';
import React, {useState} from 'react';

export default function AddGroup() {
    const [text,setText]=useState("");
    const[data,setData]=useState([]);
    // const getInputValue=(e)=>{
    //     setText(e.target.value)
    //     console.log(text)
    // }
    const additem=()=>{
      if(!text)
      {}
      else
      {
      setData([...data,text])
      setText("");
      }
    }
  return (
    <>
      <div className="text">
                    Create Group 
                </div>
                <div className="description">
                <input type="text" class="typekar" id="typekar" placeholder="Enter Room Name"  value={text} onChange={(e)=>setText(e.target.value)} />
            </div>
        <button type="button" className="btn btn-outline-warning create"  onClick={additem}>Create</button>
        {/* <div className="users">{
              data.map((elem,ind)=>{
                return(
                <div className="list-group" key={ind}>
                  <a href="/" className="list-group-item list-group-item-action active" aria-current="true">{elem}</a>
                </div>
                )
               })
           }
          </div> */}
    </>
  )
}
