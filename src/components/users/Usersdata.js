import React,{ useEffect, useState }  from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component';
 import { useNavigate } from 'react-router-dom'
import { API_END_POINTS } from '../../assets/common'
export default function Usersdata() {
    const [users, setUsers] = useState([]);
    const [searchInput, setSearchInput] = useState('')

   const navigate = useNavigate();
    var tokens=JSON.parse(localStorage.getItem('admin'))
        var TokeN=tokens.accessToken;
        
      useEffect(() => {
           getusers();
         },[]
          )
     //-------------------------------------//
    //   function Search(){
    //     axios.post(API_END_POINTS.SEARCH_USERS,{search:searchInput},
    //         { 
    //         headers: {'Content-Type': 'application/json' ,
    //                     'x-access-token':TokeN}
    //     }).then(res=>{  
    //       setUsers(res.data);})
    //   }
      const handlesearch = (e) => {
           e.preventDefault();
          let search = e.target.value
           setSearchInput(search);

           axios.post(API_END_POINTS.SEARCH_USERS,{search:searchInput},
            { 
            headers: {'Content-Type': 'application/json' ,
                        'x-access-token':TokeN}
        }).then(res=>{  
          setUsers(res.data);})
      }
         
  //----------------------------------------//

    function getusers (offsets){
       
        var tokens=JSON.parse(localStorage.getItem('admin'))
        var TokeN=tokens.accessToken;
        

      axios.post(API_END_POINTS.GET_USERS,{},{ 
        headers: {'Content-Type': 'application/json' ,
                    'x-access-token':TokeN}
    },
        ).then(res=>{
            setUsers(res.data);
      })
    }
    const edituser=(id)=>{
             navigate('/main/useredit', {state: {uid:id}});
             console.log(id,"1111")
          }

    function Deleteuser(id){
         setUsers("") 
        console.log(id,"11")
          var result = window.confirm("Want to delete?");
           if (result) {axios.delete(API_END_POINTS.DELETE_USERS+id,{ 
            headers: {'Content-Type': 'application/json' ,
                        'x-access-token':TokeN}
        }).then(res=>{ 
           getusers();
          }) 
        }
         }

         function khatta(id){
               navigate("/main/detailkhata", {state: {uid:id}});
             }

    const columns = [
        {
          name: <h5>Name</h5>,
        //   selector: (row)=>row.name || "N/A",
        cell: (row)=> <a onClick={()=>khatta(row.uid)}>{row.name || "N/A"}</a>,
        sortable: true
        },
        {
          name: <h5>Email</h5>,
          selector: (row)=>row.email || "N/A",
        },
        {
          name: <h5>Contact_no</h5>,
          selector: (row)=>row.contact_no,
        },
        {
          name: <h5>Createdate</h5>,
          selector: (row)=>row.createdat,
        },
        {
            name: <h5>Status
            </h5>,
            selector: (row)=>row.is_active,
            cell: (row)=><span hidden={row.is_active}>true</span>
          },       
        //  <span hidden={!list.is_active}>false</span>
        {
            name: <h5>Delete</h5>,
            cell: (row)=> <button class="btn btn primary" onClick={()=>Deleteuser(row.uid)}><i className="fa fa-trash" style={{ color: "red", fontSize: "23px" }}/></button>,  
            // cell: (row)=> <button className="btn btn primary" onClick={()=>edituser(row)}><i className="fa fa-pencil" style={{ color: "black", fontSize: "23px" }}/></button>
        },
          {
            name: <h5>Edit</h5>,
            cell: (row)=> <button className="btn btn primary" onClick={()=>edituser(row)}><i className="fa fa-pencil" style={{ color: "black", fontSize: "23px" }}/></button>,
          }
      ];
  return (
    <div>
      <main id="main">
 <DataTable 
 title="User Detail"
 fixedHeader
 fixedHeaderScrollHeight='500px'
 highlightOnHover
 pagination
  columns={columns} 
  data={users} 
  subHeader
  subHeaderComponent={
    <>
     <input name="search-focus" type="search" placeholder='Search Contact' className="w-25 form-control" value={searchInput} onChange={handlesearch}/>
      {/* <button type="button" className="btn btn-primary">search</button> */}
     </>
  }
 
  /> 
</main>

    </div>
  )
}
