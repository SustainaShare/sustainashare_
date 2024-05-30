import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { BeneficiaryRegisterPage, DonorRegisterPage, SignInPage } from './pages/AuthPage';
import RequestsPage from './pages/DonationsRequestsPage';
import DonationsPage from './pages/DonationsPage';
import donationItems from './dummy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/register-donor" element={<DonorRegisterPage />} />
        <Route path="/register-beneficiary" element={<BeneficiaryRegisterPage />} /> 
        <Route path="/donation-requests" element={<RequestsPage />} />
        <Route path="/donation-list" element={<DonationsPage donationItems={donationItems} />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;