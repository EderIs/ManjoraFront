export class Banco{

 id?:number;
 nombre:string;
 codigoIdenBancaria:string;
 calle:string;
 calleSecundaria:string;
 ciudad:string;
//Falta estado para hacer el match 
 codigoPostal:number;
 telefono:string;
 correoElectronico:string;
 activo:string;


constructor(nombre:string,codigoIdenBancaria:string,calle:string,calleSecundaria:string,ciudad:string,
   codigoPostal:number,telefono:string,correoElectronico:string,activo:string,
    ){

        this.nombre=nombre;
        this.codigoIdenBancaria=codigoIdenBancaria;
        this.calle=calle;
        this.calleSecundaria=calleSecundaria;
        this.ciudad=ciudad;
       //Falta estado para hacer el match 
        this.codigoPostal=codigoPostal;
        this.telefono=telefono;
        this.correoElectronico=correoElectronico;
        this.activo=activo;
}




}