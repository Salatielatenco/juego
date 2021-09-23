class jugador{
    vida=100;
    habilidad=100;
    kayoken=50;
    nombre="";
    hameha=50;
    constructor(nombre){
        this.nombre = nombre;

    }
    curar(jugadorObjetivo){
        jugadorObjetivo.vida+=20
        this.habilidad+=40;
        this.status(jugadorObjetivo);
    }
    atacar(jugadorObjetivo){
        jugadorObjetivo.vida -= 20
        this.habilidad -= 40;
        this.status(jugadorObjetivo);

    }
    status(jugadorObjetivo){
        console.log(jugadorObjetivo)
        console.logo(this);
    }
    kayoken(jugadorObjetivo){
        jugadorObjetivo.vida -= 30
        this.habilidad-=this.kayoken
        this.status(jugadorObjetivo)
    }
    hemeha(jugadorObjetivo){
        jugadorObjetivo.vida -= 30
        this.habilidad-=this.hameha
        this.status(jugadorObjetivo);
    }
    recuperar(jugadorObjetivo){
        this.vida += 15
        this.status(jugadorObjetivo)
    }
    revivir(jugadorObjetivo){
        this.vida += this.vida
        this.status(jugadorObjetivo)
    }
    valida(jugadorObjetivo){
        if(jugadorObjetivo.atacar>20){
            this.atacar
        }else{
            console.log("lo siento ya no tiene ataque")
        }

        if(jugadorObjetivo.vida>1){
            this.recuperar
        }else{
            console.logo("lo siento usted ya o tiene vida para curarse")
        }
    }
}

let goku   = new jugador("goku")
let vegeta = new jugador("vegeta")