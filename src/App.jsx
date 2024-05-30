import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { SignInPage, RegisterPage } from './pages/AuthPage';
import RequestsPage from './pages/DonationsRequestsPage';
// import DonationsPage from './pages/DonationsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/register" element={<RegisterPage />} /> 
        <Route path="/donation-requests" element={<RequestsPage />} />
        {/* <Route path="/donation-list" element={<DonationsPage />} /> */}
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;