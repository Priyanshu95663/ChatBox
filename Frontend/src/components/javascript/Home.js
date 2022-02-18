import React from 'react'
import './css/style.css';
// import List from './List'
export default function Home() {
  return (
    <div>
      <div>
       <input type="text" name="Search" id="Search" placeholder="Search"
         required />
    </div>
    <div className="profileimage"></div>
    {/* <List/> */}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
    </div>
  )
}
