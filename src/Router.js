import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AbsenList from './Pages/AbsenList';
import AccountDetail from './Pages/AccountDetail';
import Admin from './Pages/Admin';
import DetailArmada from './Pages/DetailArmada';
import DetailUser from './Pages/DetailUser';
import IzinList from './Pages/IzinList';
import ListPengaduan from './Pages/ListPengaduan';
import Login from './Pages/Login';
import MaintananceList from './Pages/MaintenanceList';
import User from './Pages/User';
import UserList from './Pages/UserList';

const Rute = () => {
    return(
        <Routes>
            <Route path='login' element={<Login />}/>
            <Route path='admin' element={<Admin />}/>
            <Route path='user' element={<User />}/>
            <Route path='list-user' element={<UserList />}/>
            <Route path='list-absen' element={<AbsenList />}/>
            <Route path='list-izin' element={<IzinList />}/>
            <Route path='maintenances' element={<MaintananceList />}/>
            <Route path='pengaduan' element={<ListPengaduan />}/>
            <Route path='detail-user' element={<DetailUser />}/>
            <Route path='detail-armada' element={<DetailArmada />}/>
            <Route path='account-detail' element={<AccountDetail />}/>
        </Routes>
    )
}
export default Rute