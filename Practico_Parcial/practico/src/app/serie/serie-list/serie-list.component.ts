import { Component, OnInit } from '@angular/core';
import { Serie } from '../Serie';
import { SerieService } from '../serie.service';
import { SerieDetail } from '../SerieDetail';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  selected: Boolean= false;
  selectedSerie!: SerieDetail;

  onSelected(serie: SerieDetail):void {
    this.selected=true;
    this.selectedSerie=serie;
  }
  series: Array<SerieDetail>=[];

  constructor(private serieService: SerieService) { }

  getSeries():void{
    this.serieService.getSeries().subscribe((series)=>{
      this.series=series;
      const total: HTMLElement = document.getElementById("total-series")!;
      total.innerHTML = `Seasons average: ${getPromedioSeas(this.series)}`;
    });
  }

  ngOnInit() {
    this.getSeries();
  }
}

function getPromedioSeas(series: SerieDetail[]): number {
  var total: number = 0;
  var conteo: number = 0;
  series.forEach((serie) => total = total + serie.seasons);

  series.forEach((serie) => conteo = conteo + 1);
  return total/conteo}
