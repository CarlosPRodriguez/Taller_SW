import { Serie } from "./Serie";
export class SerieDetail extends Serie {

  constructor(
    id:number,
    nombre:string,
    channel:string,
    seasons:number,
    descripcion: string,
    poster:string,
    pagina:string
  ){
    super(id, nombre,channel,seasons, descripcion,poster,pagina)
  }



}
