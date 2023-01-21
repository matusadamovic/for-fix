import React from 'react';
import { housesData } from '../data';
import { useParams } from 'react-router-dom';
import { BiBed, BiBath, BiArea, BiPhone } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  return (
    <div className='container mx-auto min-h-[800px] mb-14'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <h2 className='text-2xl font-semibold'>{property.title}</h2>
          <h3 className='text-lg mb-4'>{property.address}</h3>
        </div>
        <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
          <div className='bg-gradient-to-r from-red-200 via-red-300 to-yellow-300 rounded-full text-white px-3 inline-block'>
            {property.type}
          </div>
          <div className='bg-red-400 rounded-full text-white px-3 inline-block'>
            {property.country}
          </div>
        </div>
        <div className='text-3xl font-semibold text-orange-400'>
          {property.price} €
        </div>
      </div>
      <div className='flex flex-col items-start gap-8 lg:flex-row'>
        <div className='max-w-[768px]'>
          <div className='mb-8'>
            <img src={property.imageLg} alt='' />
          </div>
          <div className='flex gap-x-6 text-orange-500 mb-6'>
            <div className='flex gap-x-2 items-center'>
              <BiBed className='text-2xl' />
              <div className='text-lg font-medium'>{property.bedrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiBath className='text-2xl' />
              <div className='text-lg font-medium'>{property.bathrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiArea className='text-2xl' />
              <div className='text-lg font-medium'>{property.surface}</div>
            </div>
          </div>
          <p>{property.description}</p>
        </div>
        <div className='flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8'>
          <div className='flex items-center gap-x-4 mb-8'>
            <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
              <img className='rounded-full' src={property.agent.image}></img>
            </div>
            <div>
              <div className='font-bold text-lg'>{property.agent.name}</div>
            </div>
          </div>
          <form className='flex flex-col gap-y-4'>
            <input
             className='border border-gray-300 focus:border-red-300 rounded w-full px-4 h-14 text-sm outline-none'
             type='text'
             placeholder='Meno a priezvisko*'
           />
           <input
             className='border border-gray-300 focus:border-red-300 rounded w-full px-4 h-14 text-sm outline-none'
             type='text'
             placeholder='Email*'
           />
           <input
             className='border border-gray-300 focus:border-red-300 rounded w-full px-4 h-14 text-sm outline-none'
             type='text'
             placeholder='Mobil*'
           />
           <textarea
             className='border border-gray-300 focus:border-red-300 rounded w-full p-4 h-36 text-sm text-gray-400 outline-none resize-none'
             type='text'
             placeholder='Message*'
             defaultValue='Dobry den, mam zaujem o ...'
           />
            <div className='flex gap-x-2'>
              <button
                className='bg-red-300 hover:bg-red-400 text-white rounded p-4 text-sm w-full transition'
                type='submit'
              >
                Poslat spravu
              </button>
              <button className='border border-red-300 text-red-300 hover:border-red-400 hover:text-red-400 rounded p-4 text-sm w-full transition'>
                Zavolat
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
