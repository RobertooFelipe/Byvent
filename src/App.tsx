import './App.scss';

import { makeServer } from './services/miragejs/eventsData'
import { logServer } from './services/miragejs/logSold'

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
logServer()

function App() {
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
