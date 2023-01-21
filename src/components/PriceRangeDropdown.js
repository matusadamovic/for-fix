import React, { useState, useEffect, useContext } from 'react';
import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { HouseContext } from './HouseContext';

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: 'Cena od -do (všetky)',
    },
    {
      value: '50000 - 100000',
    },
    {
      value: '100000 - 150000 ',
    },
    {
      value: '150000 - 200000',
    },
    {
      value: '200000 - 250000',
    },
    {
      value: '250000 a viac',
    },
  ];

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full'
      >
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[13px]'>Vyberte cenu od - do</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>

      <Menu.Items className='dropdown-menu'>
        {prices.map((price, index) => {
          return (
            <Menu.Item
              as='li'
              onClick={() => setPrice(price.value)}
              key={index}
              className='cursor-pointer hover:text-red-300 transition'
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
