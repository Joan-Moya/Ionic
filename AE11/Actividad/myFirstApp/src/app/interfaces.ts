export interface IArticulo{

    "Key": string,
    "Nombre":string,
    "Precio": number,
    "Descripcion":string,
    "Usuario":string
}

export interface IMotor extends IArticulo {
    "Tipo": string,
    "Kilometros" : number,
    "Año": number
}

export interface IInmobiliaria extends IArticulo {
    "Metros": number,
    "NumeroBaños" : number,
    "NumeroHabitaciones": number,
    "Localidad": string 
}

export interface ITecnologia extends IArticulo {
    "Perfecto": boolean,
    "Usado" : boolean
}