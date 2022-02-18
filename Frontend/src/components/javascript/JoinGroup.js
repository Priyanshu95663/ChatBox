import React from 'react'
// import List from './List'

export default function JoinGroup() {
  return (
    <div>
        <div className="text">
                   Join Group
                </div>
        <div className="Searchroom">
                <input type="text" class="searchnewroom" placeholder="Search Room"/>
            </div>
        <button type="button" className="btn btn-outline-warning create">Join</button>
        {/* <List/> */}
    </div>
  )
}
