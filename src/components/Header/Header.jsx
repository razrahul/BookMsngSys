import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true,
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus,
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus,
    },
    {
      name: 'All Books',
      slug: '/all-posts',
      active: authStatus,
    },
    {
      name: 'Add Book',
      slug: '/add-post',
      active: authStatus,
    },
  ];

  return (
   <>
    <header className="py-3 shadow-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Container>
        <nav className="flex items-center justify-between">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex space-x-6">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-6 py-2 font-semibold text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-white hover:text-blue-500 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn className="inline-block px-6 py-2 font-semibold text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-white hover:text-blue-500 rounded-full" />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
   
   </>
  );
}

export default Header;
