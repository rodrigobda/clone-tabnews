'use client';

import { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        document.body.style.margin = '0';
    }, []);

    return (
        <div>
            <h1>Amor, sei que em breve daremos a volta por cima e estaremos como nessa foto!</h1>
            <img src="https://i.ibb.co/pj47rzN7/10-C7-F104-95-DE-421-E-8491-5126515-C2583.png" alt="Minha imagem" />
        </div>
    );
}