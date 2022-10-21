import './App.scss';

import Login from './pages/login'
import AddEvent from './pages/addEvent'
import ListEvents from './pages/listEvents'
import Dashboard from './pages/dashboard'
import MyTickets from './pages/myTickets'
import MyWallet from './pages/myWallet'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/addEvent' element={<AddEvent />}/>
      <Route path='/allEvents' element={<ListEvents />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/myTickets' element={<MyTickets />}/>
      <Route path='/myWallet' element={<MyWallet />}/>
    </Routes>
  );
}

export default App;
