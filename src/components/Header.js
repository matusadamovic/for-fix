import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/vector.svg';

const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
          <img src={Logo} alt='' />
        </Link>
        <div className='flex items-center gap-6'>
        <Link
            className='bg-red-300 hover:bg-red-400 text-white px-4 py-3 rounded-lg transition'
            to='/'
          >
            PONUKY
          </Link>

          <Link className='hover:text-red-300 transition hidden flex-1 lg:flex justify-end items-end' to='/o-nas'>
            O nás
          </Link>
          <Link className='hover:text-red-300 transition' to='/kontakt'>
            Kontakt
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
