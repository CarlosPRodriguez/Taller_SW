export class Serie {
  id: number;
  nombre:string;
  channel: string;
  seasons: number;
  descripcion: string;
  poster: string;
  pagina: string;

  public constructor(id: number, nombre:string, channel: string, seasons: number,
    descripcion: string, poster: string, pagina:string)
  {
    this.id=id;
    this.nombre=nombre;
    this.channel=channel;
    this.seasons=seasons;
    this.descripcion=descripcion;
    this.poster=poster;
    this.pagina=pagina;

  }
}
