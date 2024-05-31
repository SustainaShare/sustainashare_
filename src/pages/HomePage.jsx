import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import { navLinks } from '../dummyData';
import DropdownButton from '../components/DropdownButton';

const actions = [DropdownButton]

const HomePage = () => {
  return (
    <>
      <Header navLinks={navLinks} actions={actions} />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
