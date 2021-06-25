import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstrumentoService } from 'src/app/services/instrumento.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  
  instrumento: any;
  id: string;
  constructor(
    private instrumentoService: InstrumentoService, 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getInstrumentoById();
  }

  getInstrumentoById(){
    this.id = this.route.snapshot.params['id'];
    this.instrumento = this.instrumentoService.getInstrumentoPorId(this.id); 
  }

}
