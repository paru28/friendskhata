import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom';
import { API_END_POINTS } from '../../assets/common'


export default function Useredit() {
  const [formname, setFormname] = useState("");
  const [formemail, setFormemail] = useState("");
  const [formcontact, setFormcontact] = useState("");


   const {state} = useLocation();
    const Uid=state.uid
        const id=Uid.uid
        var tokens=JSON.parse(localStorage.getItem('admin'))
        const TokeN=tokens.accessToken;
        console.log(TokeN);

        console.log(id)
         useEffect(() => {
          users();
        },[]
          )

function users(){ 
   axios.get(API_END_POINTS.DETAIL_USERS+id
   ,{ 
     headers: {'Content-Type': 'application/json' ,
                  'x-access-token':TokeN
        }
}
).then((res) =>{
  setFormname(res.data.name || 'N/A');
  setFormemail(res.data.email || 'N/A');
  // setFormcontact(res.data.contact_no)
})
}

function handelsubmit(event){
  event.preventDefault();
  console.log(id);
  // const iteam={"uid":id, "name":formname,"email":formemail}

    axios.put(API_END_POINTS.UPDATE_USERS,{"uid":id, "name":formname,"email":formemail},
    { 
      headers: {'Content-Type': 'application/json' ,
                   'x-access-token':TokeN
         }
 }).then(responce=>{
    console.log(responce.data)
     }) 
}
  // onChange={inputchange}
  return (
//      <main className='main' id='main'>
//       <form >
//      <label>email</label>
//      <input type='text' value={formvalue}   name='email'></input>
//  </form>
//  </main>
<main className='main' id='main'>
<form   onSubmit={handelsubmit}>
                <div class="col-6">
                  <label  class="form-label">Your Name</label>
                  <input type="text" class="form-control" value={formname} onChange={(e)=>setFormname(e.target.value)} name="name"/>
                </div>
                <div class="col-6">
                  <label  class="form-label">Email</label>
                  <input type="email" class="form-control" value={formemail} onChange={(e)=>setFormemail(e.target.value)} name="email"/>
                </div>
                <div class="col-6">
                  <label  class="form-label">Contact_no</label>
                  <input type="contact" class="form-control" value={formcontact} onChange={(e)=>setFormcontact(e.target.value)} name="contact"/>
                </div>
                
                <div  class="">
                  <button type="submit"  class="btn btn-primary" >Submit</button>
                </div>
              </form>
</main>
  )
} 