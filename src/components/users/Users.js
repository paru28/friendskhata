import React from "react"

import Usersdata from "./Usersdata";
export default function Users() {
  
  // const navigate = useNavigate();

  // /*--------------------------*/

  // const [isLoading, setIsLoading] = useState(false);

  // //  const showicons = useOutletContext();
  //   const [users, setUsers] = useState([]);
  //   const [Globalusers, setGlobalUsers] = useState([]);
  //   const [searchInput, setSearchInput] = useState('')

    // useEffect(() => {
    //   getusers();
    // },[]
    //   )

      //----------------------------------------
      // function Search(){
      //   axios.post(API_END_POINTS.SEARCH_USERS,{search:searchInput}).then(res=>{  
      //     setUsers(res.data);})
      // }

// const handlePageClick = (event) => {

//   let currentpage=event.selected 
//      const offsets =currentpage *10
//      getusers(offsets)
// };
//       //----------------------------------------
//       // const config = {
//       //   headers:{
//       //     header1:" x-access-token"
//       //   }
//       // };
//   function getusers (offsets){
//     setIsLoading(true)
//     var tokens=JSON.parse(localStorage.getItem('admin'))
//     const TokeN=tokens.accessToken;
    
  
//   axios.post(API_END_POINTS.GET_USERS,{limit:10,offset:offsets},{ 
//     headers: {'Content-Type': 'application/json' ,
//                 'x-access-token':TokeN}
// },
//     ).then(res=>{
//       console.log(res.data);
//     setGlobalUsers(res.data);
//     setIsLoading(false)
    
//   })

//   const columns = [
//     {
//       name: 'Name',
//       selector: (row)=>row.name,
//     },
//     {
//       name: 'Email',
//       selector: (row)=>row.email,
//     },
//     {
//       name: 'Contact_no',
//       selector: (row)=>row.contact_no,
//     },
//     {
//       name: 'Createdate',
//       selector: (row)=>row.createdat,
//     }
//   ];






  // .catch((err)=>{alert(err.message);}) 
//}

// const edituser=(id)=>{

//      navigate('/main/useredit', {state: {uid:id}});
//   }
/*------------------------------->
-------------------------------*/
// function Deleteuser(id){
//   // setUsers("")
//   var result = window.confirm("Want to delete?");
//   if (result) {axios.delete('http://13.234.136.26:3333/api/user/delete/'+id).then(res=>{ 
//   getusers();
// }) 
//   }
// }

// function khatta(id){
//   navigate("/main/Useraccounts", {state: {uid:id}});
//   console.log(id,"111")
// }
/*------------------------------->
-------------------------------*/

// const handlesearch = (e) => {
//   e.preventDefault();
//   let search = e.target.value
//   setSearchInput(search);
// }

  return (   
//      <main id="main">
//                <div className="card-body">
//                   <h5 className="card-title">Users Khata</h5>
//                    <div className="input-group">
//       <div className="form-outline">
//     <input name="search-focus" type="search" value={searchInput} onChange={handlesearch} className="form-control"/>
//       </div>
//        <button type="button" className="btn btn-primary" onClick={Search}>search</button>
//       </div>
    
//                    <table className="table table-borderless txt">

//                      <thead>
//                        <tr><th scope="col">S.No</th>
//                          <th scope="col">Name</th>
//                          <th scope="col">Email</th>
//                          <th scope="col">Contact</th>
//                          <th scope="col">createdate</th>
//                          <th scope="col">Status</th>
//                          <th col span="2">Action</th>
//                        </tr>
//                      </thead>
//                      <tbody>
//                     {isLoading? <span className='loading'>Loading...</span>:null}
//                        { 
//                       // users.length > 0 ?
//                       users.map((list,index=1)=>
//                          (  
//                          <tr>
//                          <td > {index+1} </td> 
//                          <td><a onClick={()=>khatta(list.uid)}> {list.name || 'N/A'}</a></td>
//                           <td>{list.email || 'N/A'}</td>
//                           <td>{list.contact_no}</td>
//                            <td>{list.createdat}</td>
//                            <td>
//                             <span hidden={list.is_active}><img src={img} alt="img"/></span>
//                             <span hidden={!list.is_active}><img src={imgs} alt="img"/></span>
//                            </td>
//                           <td> 
//                             <a onClick={()=>Deleteuser(list.uid)}><img src={imges} alt="img"/></a>&nbsp;&nbsp;
//                             <a onClick={()=>edituser(list)}><img src={images} alt="img"/></a>
//                           </td> 
                          
//                          </tr>
//                           )
//                           )  
//                             // : <span> No data Found</span>
//                       } 
//                      </tbody>
//                   </table>
//                   {/* <div>
//         <button onClick={handlePageClick}>Pre</button>
//         <button onclick={handlePageClick}>next</button>
//     </div> */}
//                 </div>  <div className="pagination"> 
//   <ReactPaginate
//     breakLabel="..."
//     nextLabel="next >"
//     onPageChange={handlePageClick}
//     pageRangeDisplayed=''
//     pageCount={5}
//     previousLabel="< previous"
//     renderOnZeroPageCount={null}
//     breakClassName={"page-item"}
//     breakLinkClassName={"page-link"}
//     containerClassName={"pagination"}
//     pageClassName={"page-item"}
//     pageLinkClassName={"page-link"}
//     previousClassName={"page-item"}
//     previousLinkClassName={"page-link"}
//     nextClassName={"page-item"}
//     nextLinkClassName={"page-link"}
//     activeClassName={"active"}
//   />
// </div>
//  <div>
//      </div>
//     </main>
<Usersdata/>
)
}
