

import { Route, Routes } from 'react-router-dom'

import Layout from './shared/components/Layout';
import { Guard } from './shared/components/Guard';
//Pages
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import TransferPage from "./pages/TransferPage";

import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route element={<Guard isAutorizated={true}>  <Layout /></Guard>}>
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/transfer' element={<TransferPage />} />
      </Route>
    </Routes>
  )
}

export default App
