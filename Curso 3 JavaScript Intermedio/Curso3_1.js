var jugador = {
    fuerza: 1,
    incrementaFuerza: function() {
        this.fuerza++;
    },
    consultaFuerza: function() {
        console.log("Fuerza: " + this.fuerza);
    }
}

jugador.consultaFuerza();
jugador.incrementaFuerza();
jugador.consultaFuerza();