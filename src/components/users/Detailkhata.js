import axios from 'axios'
import {useLocation} from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { API_END_POINTS } from '../../assets/common'
import img from '../../assets/images/books.png'
import { useNavigate } from 'react-router-dom'

export default function Detailkhata() {
  const navigate = useNavigate();

    const {state} = useLocation();
    var Uid=state.uid
     const [userskhata, setUserskhata] = useState([]);

     var tokens=JSON.parse(localStorage.getItem('admin'))
     var Token=tokens.accessToken;
     
     function khatas(member){
       navigate("/main/useraccounts",{state: {"members":member,"uid":Uid}});
         console.log(member)
    }
         useEffect(() => {
          userkhatas();
        },[]
 )
                     
 function userkhatas(){
        axios.post(API_END_POINTS.KHATA_USERS,{"uid":Uid},{
            headers: {'Content-Type': 'application/json' ,
           'x-access-token':Token }
         }).then( res=>{
     var khatta=res.data;
     setUserskhata(khatta)
     console.log(khatta);
    });
}

  return (
    <div>
    <main id="main" className='main'>
      {/* <div>
      {userskhata.khata_name}
      </div> */}


      <div className="col-xxl-4 col-md-6">
     { userskhata.map(list=>
            <div className="card info-card revenue-card">
              <div className="card-body">
                <h5 className="card-title">
                  <span onClick={()=>khatas(list.members)}>{list.data.khata_name}</span>
                  </h5>
                
                <div className="d-flex align-items-center">
                  <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <img style={{'height': '46px'}}  src={img} alt="img"/>

                    <i className="bi bi-currency-dollar"></i>
                  </div>
                  <div className="ps-3">
                    <span className="text-success small pt-1 fw-bold">{list.data.khata_type}</span><span className="text-muted small pt-2 ps-1">{list.data.is_active}</span>
                  </div>
                </div>
              </div>
            </div>)}
            </div>
      </main>
      </div>
  )
}
