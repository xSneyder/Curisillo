'use strict';

let contexto;



window.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('tablero');
    const contexto = canvas.getContext ('2d');
    contexto.fillStyle = '#CD5C5C';
    contexto.fillRect(0, 0, 200, 200);
    contexto.fillStyle = 'blue';
    contexto.fillRect(0, 0, 40, 40);



    console.log(canvas);
});


class Serpiente {
    constructor(x, y, ancho, alto, contexto) {
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
    }

    dibujar(x, y) {
}
}