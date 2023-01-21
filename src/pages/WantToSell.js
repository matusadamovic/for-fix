import React from "react";
import { housesData } from '../data';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import Image from '../assets/img/agents/agent.jpg';

const WantToSell = () => {
    const { id } = useParams();
    const property = housesData.find((house) => {
      return house.id === parseInt(id);
    });
    return (
<div>
    <div className='flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8 '>
        <h1 className="font-bold text-lg">Kontaktne informacie</h1>
        <p>
            ATHENA REAL spol. s r.o.
            <br/>
            Bebravská 11
            <br/>
            821 07 Bratislava
            <br/>
            Mobil: +421 903 448 717
            <br/>
            E-mail: olgaadamovicova@gmail.com
        </p>
        </div>
    <div className='flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8'>
            <div className='flex items-center gap-x-4 mb-8'>
                <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
                <img className="rounded-full" src={Image}></img>
                </div>
                <div>
                <div className='font-bold text-lg'>Mgr. Olga Adamovicova</div>
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
    );
};

export default WantToSell;
