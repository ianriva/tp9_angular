import { Component, OnInit } from '@angular/core';
import { InstrumentoService } from 'src/app/services/instrumento.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  instrumentos: any[] = [];

  constructor(
    private instrumentoService: InstrumentoService) { }

  ngOnInit(): void {
    this.instrumentos = this.instrumentoService.getInstrumentos();
  }
}
