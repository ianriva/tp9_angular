import { Injectable } from '@angular/core';
import * as instrumentosData from 'src/assets/fakeAPI/instrumentos.json';
@Injectable({
  providedIn: 'root'
})
export class InstrumentoService {

  instrumentoFile: any = (instrumentosData  as  any).default;

  constructor() { }

  public getInstrumentos():any[]{
    return this.instrumentoFile.instrumentos;
  }

  public getInstrumentoPorId(id:string):any{
      for(let instrumento of this.instrumentoFile.instrumentos){
          if(instrumento.id == id){
            return instrumento;
          } 
      }
  }

  public buscarInstrumentos(filtro:string):any[]{
      let instrumentos:any[] = [];
      filtro = filtro.toLowerCase();

      for(let instrumento of this.instrumentoFile.instrumentos){
        let marca = instrumento.marca.toLowerCase();
        let modelo = instrumento.modelo.toLowerCase();
        if(marca.indexOf(filtro) >= 0 || modelo.indexOf(filtro) >= 0){
          instrumentos.push(instrumento);
        }

      }
      return instrumentos;
    }
}
