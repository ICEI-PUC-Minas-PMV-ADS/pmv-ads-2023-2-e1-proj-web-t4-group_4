// Elementos Globais
const imgMario = document.querySelector('#imgMario');

// Funções
const playSom = (elemento) => {
    const element = document.querySelector(`#${elemento}`);

    element.play();
};

const stopSom = (elemento) => {
    const element = document.querySelector(`#${elemento}`);

    element.pause();
};

const pular = ({ key }) => {
    if (key === 'ArrowUp') {
        imgMario.classList.add('pular');

        playSom('somPulo');

        setTimeout(() => {
            imgMario.classList.remove('pular');
        }, 500);
    }
};

const voar = (evento) => {
    if (evento.key === ' ') {
        imgMario.classList.add('voar');

        imgMario.src = './img/sonicpul.png';

        playSom('somVoar');

        setTimeout(() => {
            imgMario.classList.remove('voar');
            imgMario.src = './img/sonic.gif';
        }, 1500);
    }
};

const abaixar = ({ key }) => {
    if (key === 'ArrowDown') {
        imgMario.classList.add('abaixar');

        imgMario.src = './img/bolaP.png';

        playSom('somAgachado');
    };
};

const levantar = ({ key }) => {
    if (key === 'ArrowDown') {
        imgMario.classList.remove('abaixar');

        imgMario.src = './img/sonic.gif';
    }
};

const limparTexto = () => {
    inputJogador.value = '';
    btnStart.setAttribute('disabled', '');
};

export { playSom, stopSom, pular, voar, abaixar, levantar, limparTexto, imgMario };

