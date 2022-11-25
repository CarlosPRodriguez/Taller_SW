import { Component, OnInit } from '@angular/core';
import { Serie } from '../Serie';
import { SerieService } from '../serie.service';
@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {
  selected: Boolean=false;
  selectedSerie!: Serie;
  series: Array<Serie>=[];

  constructor(private serieService: SerieService) { }

  getSeries():void {
    this.serieService.getSeries().subscribe((series)=>{
      this.series=series;
      const total: HTMLElement = document.getElementById("total-series")!;
      total.innerHTML = `Seasons average: ${getPromedioSeas(this.series)}`;
    });
  }
  ngOnInit() {
    this.getSeries();
  }

  onSelected(serie:Serie):void{
    this.selected=true;
    this.selectedSerie=serie;
  }

}

function getPromedioSeas(series: Serie[]): number {
  var total: number = 0;
  var conteo: number = 0;
  series.forEach((serie) => total = total + serie.seasons);

  series.forEach((serie) => conteo = conteo + 1);
  return total/conteo}

