import React from 'react'
import './css/style.css';

export default function List(props) {
  return (
      <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
      <div className="users">
      <div className="list-group">
        <a href="/" className="list-group-item list-group-item-action active" aria-current="true"> The current link
            item </a>
        <a href="/" className="list-group-item list-group-item-action">A second link item</a>
        <a href="/" className="list-group-item list-group-item-action">A second link item</a>
        <a href="/" className="list-group-item list-group-item-action">A second link item</a>
      </div>
</div>
{/* <div className="users">{
              props.data.map((elem,ind)=>{
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
