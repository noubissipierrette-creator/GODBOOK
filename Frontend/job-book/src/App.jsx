import {
 BrowserRouter as Router,
 Routes,
 Route,
 Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

import LandingPage from "./pages/landingPage/LandingPage";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import JobSeekerDashboard from "./pages/Jobseeker/JobSeekerDashboard";
import JobDetails from "./pages/Jobseeker/JobDetails";
import SavedJobs from "./pages/Jobseeker/SavedJobs";
import UserProfile from "./pages/Jobseeker/UserProfile";
import EmployerDashboard from "./pages/Employer/EmployerDashboard";
import JobPostingForm from "./pages/Employer/JobPostingForm";
import ManageJobs from "./pages/Employer/ManageJobs";
import EmployerProfilePage from "./pages/Employer/EmployerProfilePage";
import Applicationviewer from "./pages/Employer/Applicationviewer";
import ProtectedRoute from "./routers/ProtectedRoute";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
           {/* Public Routes */}
           <Route path="/" element={<LandingPage />} />
            <Route path="/SignUp" element={<SignUp/>} />
             <Route path="/Login" element={<Login/>} />
      
             <Route path="find-jobs" element={<JobSeekerDashboard/>} />
             <Route path="/jobs/:jobId" element={<JobDetails/>} />
             <Route path="/saved-jobs" element={<SavedJobs/>} />
             <Route path="/profile" element={<UserProfile/>} />

              {/* Protected Routes */}
              <Route element={<ProtectedRoute requiredRole="Employer"/>}>
              <Route path="/employer/dashboard" element={<EmployerDashboard/>} />
              <Route path="/post-jobs" element={<JobPostingForm/>} />
              <Route path="/manage-jobs" element={<ManageJobs/>} />
              <Route path="/applicants" element={<Applicationviewer/>} />
              <Route path="/company-profile" element={<EmployerProfilePage/>} />
              </Route> 
          {/* catch all route */}
          <Route path="*" element={<Navigate to ="/" replace />} /> 
        </Routes>
      </Router>

      <Toaster
      toastOptions={ {
        className:"",
        style:{
          fontSize:"13px",
        },
      }}
      />
    </div>
  )
}

export default App