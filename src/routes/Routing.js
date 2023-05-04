import React from 'react'
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Login from '../components/login';
import Main from './Main';
import Dashboard from '../components/dashboard/Dashboard';
import Users from '../components/users/Users';
import Userprofile from '../components/Userprofile.js/Userprofile';
import Useredit from '../components/users/Useredit';
import Useraccounts from '../components/users/Useraccounts';
import Khataedit from '../components/users/Khataedit';
import Detailkhata from '../components/users/Detailkhata';

export default function Routing() {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<Login/>}/>   
     
     <Route path='/main' element={<Main/>}>
     <Route path='dashboard' element={<Dashboard/>}/>
     <Route path='user' element={<Users/>}/>
     <Route path='userprofile' element={<Userprofile/>}/>
     <Route path='useredit' element={<Useredit/>}/>
     <Route path='useraccounts' element={<Useraccounts/>}/>
     <Route path='detailkhata' element={<Detailkhata/>}/>
     <Route path='khata' element={<Khataedit/>}/>
    </Route>
    </Routes>
  </Router>
  )
}
