import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Home/Home';
import FindJobs from './Find Jobs/FindJobs';
import Candidates from './Candidates/Candidates';
import Employees from './Employees/Employees';
import Contact from './Contact Us/Contact';
// EmployeeDashbord
import Dash from './Dashboard/Employee Dashboard/Dash';
import Company from './Dashboard/Employee Dashboard/Company';
import Postnewjob from './Dashboard/Employee Dashboard/Postnewjob';
import Manage from './Dashboard/Employee Dashboard/Manage';
import Short from './Dashboard/Employee Dashboard/Short';
import Applicants from './Dashboard/Employee Dashboard/Applicants';
// CandidateDashbord
import CandidateDashbord from './Dashboard/CandidateDashboard/CandidateDashboard';
import Myprofile from './Dashboard/CandidateDashboard/Myprofile';
import MyResume from './Dashboard/CandidateDashboard/MyResume';
import AppliedJob from './Dashboard/CandidateDashboard/AppliedJob';
import JobAlerts from './Dashboard/CandidateDashboard/JobAlerts';
import CandidateShort from './Dashboard/CandidateDashboard/CandidateShort';
import ChangePassword from './Dashboard/CandidateDashboard/ChangePassword';
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
       
        {/* Employee */}
        <Route exact path='/employee-dash' element={<Dash/>}/>
        <Route exact path='/employee-dash/company' element={<Company/>}/>
        <Route exact path='/employee-dash/applicants' element={<Applicants/>}/>
        <Route exact path='/employee-dash/postnewjob' element={<Postnewjob/>}/>
        <Route exact path='/employee-dash/manage' element={<Manage/>}/>
        <Route exact path='/employee-dash/short' element={<Short/>}/>
        {/* candidate */}
        <Route exact path='/candidate-dash' element={<CandidateDashbord/>}/>
        <Route exact path='/candidate-dash/myprofile' element={<Myprofile/>}/>
        <Route exact path='/candidate-dash/myResume' element={<MyResume/>}/>
        <Route exact path='/candidate-dash/appliedJob' element={<AppliedJob/>}/>
        <Route exact path='/candidate-dash/jobAlerts' element={<JobAlerts/>}/>
        <Route exact path='/candidate-dash/candidateshort' element={<CandidateShort/>}/>
        <Route exact path='/candidate-dash/changePassword' element={<ChangePassword/>}/>
        {/* <Route exact path='/employee-dash/short' element={<Short/>}/>
        <Route exact path='/employee-dash/short' element={<Short/>}/>
        <Route exact path='/employee-dash/short' element={<Short/>}/> */}
     
      </Routes>
    </>
  );
}

export default App;
