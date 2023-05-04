import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { API_END_POINTS } from '../../assets/common'
import { useNavigate } from 'react-router-dom'

export default function  Useraccounts() {
  const [userskhata, setUserskhata] = useState({});
  const [khatamembers, setkhatamembers] = useState([]);
  const [trash, settrash] = useState(false);
  const [Globslkhatamembers, setGlobslkhatamembers] = useState([]);
  const [Inactivekhatamembers, setInactivekhatamembers] = useState([]);

  let columns = [
    {
      name: 'Member Id',
      // selector: 'member_id',
      cell: (row)=>row.member_id || "N/A",
      sortable: true,
    },
    {
      name: 'Khata Id',
      cell: (row)=>row.khata_id || "N/A",
      // selector: "khata_id",
      sortable: true,
    },
    {
      name: 'Date',
      cell: (row)=>row.added_on,
      sortable: true,
    },
    {
      name:  trash 
      ? 'restore' : "delete", 
      // onClick={()=>Deleteuser(row.khata_id)
      cell: (row)=> <button class="btn btn primary" onClick={()=> {trash ? Restore(row.khata_id) : Deleteuser(row.id)}}> {trash ?<i className="fa fa-anchor" style={{ color: "red", fontSize: "23px" }}/>: <i className="fa fa-trash" style={{ color: "red", fontSize: "23px" }}/>}</button>,
      selector: 'added_on',
      sortable: true,
    }
  ];

  // const navigate = useNavigate();

  // const {state} = useLocation();
  // var Uid="hello"
  // var id=Uid.uid

    const {state} = useLocation();
   var Uid=state.uid

  
  useEffect(() => {
    userkhatas();
  },[trash]
    )
    var tokens=JSON.parse(localStorage.getItem('admin'))
    var Token=tokens.accessToken;
    console.log(Token)
    
  function userkhatas(){    
  // var tokens=JSON.parse(localStorage.getItem('admin'))
  // var Token=tokens.accessToken;

//   axios.post(API_END_POINTS.KHATA_USERS,{"id":Uid},{
//     headers: {'Content-Type': 'application/json' ,
//        'x-access-token':Token }
// }).then(  res=>{
//   var userkhatta=res.data[0].data;
//    setUserskhata(userkhatta)
//   var members=res.data[0].members;
var memb=state.members
console.log(memb);    
 const { active , inactive } = memb.reduce(
  (acc, userRecord) => {
    userRecord?.is_active ? 
      acc.active.push(userRecord)
      : acc.inactive.push(userRecord);
    return acc;
  },
  { active: [], inactive: []}
);
 setkhatamembers(active);
 setInactivekhatamembers(inactive)
 if(trash){
  // columns.push()
  setGlobslkhatamembers(inactive)
 }else{
  // columns.push()
  setGlobslkhatamembers(active)
 }
  
}
function Deleteuser(id){
  axios.post('http://13.234.136.26:3333/api/khata/remove/member',{"id":id,"uid":Uid},
  {
    headers: {'Content-Type': 'application/json' ,
       'x-access-token':Token }
}).then(res=>{userkhatas();

})       
}
function Restore(id){
//   axios.put('http://13.234.136.26:3333/api/khata/revoke',{"khata_id":id}, {
//     headers: {'Content-Type': 'application/json' ,
//        'x-access-token':Token }
// }).then(res=>{ console.log(res.data)
 
// })        
        
}
function settrashfun(){
let Settrashdata = !trash;
settrash(Settrashdata)        
}
return (

<main id="main">
       <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
    <h1 style={{ color: "red", fontSize: "23px" }}>{userskhata.khata_name}</h1>
    {/* <button type="button" className="btn btn-secondary" onClick={Deleteuser}>Remove</button>  */}
        </div>
  <div>
</div>
  {/* <h5> {userskhata.is_active}</h5> */}
<DataTable
  title={trash ? 'Inactive Member' : 'Active Member'}
  columns={columns}
  data={Globslkhatamembers}
  fixedHeader
 fixedHeaderScrollHeight='500px'
  highlightOnHover
  subHeader
  subHeaderComponent={
    <div>
      {/* onClick={navigate("/main/khata")} */}
      {/* <button type="button" className="btn btn-secondary" onClick={()=>khattadelete}>Delete Khatas</button> */}

     <button type="button" className="btn btn-primary" onClick={(id)=>settrashfun} >ADD member</button>
      {
        trash 
        ?
        <button type="button"  onClick={settrashfun} className="btn btn-primary"  >Active member({khatamembers.length})</button>
        :
        <button type="button" style={{backgroundColor:'red'}} onClick={settrashfun} className="btn btn-primary"  >Trashed member({Inactivekhatamembers.length})</button>
      }    
      </div>
  }
/>   
</main>
  )
}