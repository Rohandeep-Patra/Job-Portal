import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Home/Home';
import FindJobs from './Find Jobs/FindJobs';
import Candidates from './Candidates/Candidates';
import Employees from './Employees/Employees';
import Contact from './Contact Us/Contact';
// import Sidebar from './DashBoard/Candidate DashBoard/Sidebar';

function App() {
  return (
    <>
      {/* <Sidebar/> */}
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/jobs' element={<FindJobs/>}/>
        <Route exact path='/candidate' element={<Candidates/>}/>
        <Route exact path='/employee' element={<Employees/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/candidate-dash' element={<Contact/>}/>
        <Route exact path='/candidate-dash' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
