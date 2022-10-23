import './App.scss';

import { makeServer } from './services/miragejs'

import Login from './pages/login'
import AddEvent from './pages/addEvent'
import ListEvents from './pages/listEvents'
import Dashboard from './pages/dashboard'
import MyTickets from './pages/myTickets'
import MyWallet from './pages/myWallet'
import EventDetails from './pages/eventDetails';

import { Routes, Route } from 'react-router-dom'

// Mock API for development without backend
makeServer()

function App() {
  console.log(`test ${process.env.REACT_APP_API_BASE_URL}and node env: ${process.env.NODE_ENV}`);
  
  return (
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/addEvent' element={<AddEvent />}/>
      <Route path='/allEvents' element={<ListEvents />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/myTickets' element={<MyTickets />}/>
      <Route path='/myWallet' element={<MyWallet />}/>
      <Route path='/eventDetails/:id' element={<EventDetails />}/>
    </Routes>
  );
}

export default App;
