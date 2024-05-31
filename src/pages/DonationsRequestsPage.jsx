import Header from '../components/Header';
import Footer from '../components/Footer';
import DonationsDashboard from '../components/WaitingList';
import { navLinks } from '../dummyData';
import DropdownButton from '../components/DropdownButton';

const actions = [DropdownButton]
const Dashboard = () => {
  return (
    <>
      <Header navLinks={navLinks} actions={actions} />
        <DonationsDashboard />
      <Footer />
    </>
  );
};

export default Dashboard;
