import React from 'react'
import Users from '../users/Users'

export default function Pagination() {
    const{pages ,nbpages}=Users();
  return (
    <div>
        {/* <button onClick={()=>prepage}>Pre</button> */}
        <p>{pages}of{nbpages}</p>
        {/* <button onclick={()=>nextpage}>next</button> */}
    </div>
  )
}
