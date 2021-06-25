import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstrumentoService } from 'src/app/services/instrumento.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  
  instrumentoBuscar: any = [];
  filtro: string;

  constructor(
    private instrumentoService: InstrumentoService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.likeInstrumentoByFiltro();
  }

  likeInstrumentoByFiltro(){
    this.filtro = this.route.snapshot.params['filtro'];
    this.instrumentoBuscar = this.instrumentoService.buscarInstrumentos(this.filtro); 
  }

}
