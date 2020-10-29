export class DB {

    constructor(
		public clientes: Cliente[],
		public productos: Producto[],
		public clasificaciones: Clasificacion[],
		public ventas: Venta[],
		public detVenta: VentaDetalle[],
    ){}
    
}

export class Cliente {
	
	constructor(
		public clave: string,
		public nombre: string,
		public direccion: string,
		public telefono: string,
		public saldo: number,
	){}
}

export class Producto {
	
	constructor(
		public clave: string,
		public descripcion: string,
		public clasificacion: number,
		public stock: number,
		public costo: number,
		public precio: number,
	){}
}

export class Clasificacion {
	
	constructor(
		public clave: string,
		public descripcion: string,
	){}
}

export class Venta {
	
	constructor(
		public folio: string,
		public fecha: string,
		public cliente: string,
		public importe: number,
	){}
}

export class VentaDetalle {
	
	constructor(
		public producto: number,
		public descripcion: string,
		public cantidad: string,
		public precio: number,
		public importe: number,
	){}
}