import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { SignInPage, BeneficiaryRegisterPage, DonorRegisterPage } from './pages/AuthPage';
import DonationsRequestsPage from './pages/DonationsRequestsPage';
// import DonationsPage from './pages/DonationsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
B       <Route path="/login" element={<SignInPage />} />
        <Route path="/register-beneficiary" element={<BeneficiaryRegisterPage />} /> 
        <Route path="/register-donor" element={<DonorRegisterPage />} /> 
        <Route path="/donation-requests" element={<DonationsRequestsPage />} />
        {/* <Route path="/donation-list" element={<DonationsPage />} /> */}
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;