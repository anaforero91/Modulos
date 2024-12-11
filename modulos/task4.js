

export class FriendAge {
    constructor(nombre, año, mes, dia){
        this.nombre = nombre;
        this.año = año;
        this.mes = mes;
        this.dia = dia;
    }
    returnAge(){
        const año = new Date().getFullYear();
        let edad =  año - this.año;
        return `${this.nombre} is ${edad} today!`

    }
}