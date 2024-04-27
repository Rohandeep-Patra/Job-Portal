import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Home/Home';
import FindJobs from './Find Jobs/FindJobs';
import Candidates from './Candidates/Candidates';
import Employees from './Employees/Employees';
import Contact from './Contact Us/Contact';
import Dash from './Dashboard/Employee Dashboard/Dash';
import Company from './Dashboard/Employee Dashboard/Company';
import Postnewjob from './Dashboard/Employee Dashboard/Postnewjob';
import Manage from './Dashboard/Employee Dashboard/Manage';
import Short from './Dashboard/Employee Dashboard/Short';
import Applicants from './Dashboard/Employee Dashboard/Applicants';


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
        <Route exact path='/employee-dash' element={<Dash/>}/>
        <Route exact path='/employee-dash/company' element={<Company/>}/>
        <Route exact path='/employee-dash/applicants' element={<Applicants/>}/>
        <Route exact path='/employee-dash/postnewjob' element={<Postnewjob/>}/>
        <Route exact path='/employee-dash/manage' element={<Manage/>}/>
        <Route exact path='/employee-dash/short' element={<Short/>}/>
      </Routes>
    </>
  );
}

export default App;
