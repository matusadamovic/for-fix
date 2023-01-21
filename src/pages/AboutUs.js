import React from "react";
import { housesData } from '../data';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import Image from '../assets/img/agents/agent.jpg';

const AboutUs = () => {

    return (
<div className='flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8'>
   <div>
        <h1 className="font-bold text-xl">O nás</h1>
        <br/>
        <p>Sme realitná kancelária, ktorá ponúka komplexné služby v oblasti realít, t.j. sprostredkovanie
        predaja, kúpy alebo prenájmu nehnuteľností:
        bytov, rodinných domov, chát, nebytových priestorov, komerčných 
        objektov, pozemkov a pod. v Bratislave a blízkom okolí.
        </p>
        <br/>
        <h2 className="font-bold text-l">Našim klientom ponúkame:</h2>
        <br/>
        <ul className="list-disc ml-6">
            <li className="text-red-400">
                osobnú obhliadku nehnuteľností s našimi spolupracovníkmi
                </li>
            <li className="text-red-400">
                vypracovanie kúpnych, nájomných a potrebných zmlúv v zmysle platných právnych predpisov
            </li>
            <li className="text-red-400">
                profesionálne vypracovanie znaleckých posudkov
            </li>
            <li className="text-red-400">
                vypracovanie a podanie návrhu na vklad do katastra nehnutelností
            </li>
            <li className="text-red-400">
                odporúčanie na najvhodnejší hypotekárny úver
            </li>
            <li className="text-red-400">
                zaevidovanie ponuky a dopytu vrátane fotodokumentácie do realitnej databázy v prípade záujmu o kúpu, predaj, resp. prenájom
            </li>
            <li className="text-red-400">
                zabezpečenie profesionálneho ocenenia nehnutelnosti
            </li>
        </ul>
        <br/>
        <p>
        Našou prioritou je úspešné ukončenie obchodu s dôrazom na maximálnu možnú spokojnosť našich klientov.
        </p>
        <br/>
        <p>Veríme, že ak sa rozhodnete využiť naše služby, splníme Vaše očakávania.</p>
        <h1>Tešíme sa na spoluprácu s Vami!</h1>
        <br/>
        <p>Spoločnosť ATHENA REAL spol. s r.o.</p>
   </div>
</div>
    );
};

export default AboutUs;
