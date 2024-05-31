import PropTypes from 'prop-types';
import logo from "../assets/images/logo.png"

const Header = ({ navLinks, actions }) => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0">
              <img className="h-16 w-16" src={logo} alt="Logo" />
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              {navLinks.map(({ href, label, current }) => (
                <a
                  key={href}
                  href={href}
                  className={`border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    current ? 'border-primary text-fontWhiteBg' : ''
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            {actions.map((ActionComponent, index) => (
              <ActionComponent key={index} />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      current: PropTypes.bool,
    })
  ).isRequired,
  actions: PropTypes.arrayOf(PropTypes.elementType).isRequired,
};

export default Header;
