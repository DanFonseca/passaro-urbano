import { Component, OnInit } from '@angular/core';
import {OfertaService} from '../../ofertas.service';
import {Oferta} from '../oferta.model';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css'],
  providers: [OfertaService]
})
export class RestauranteComponent implements OnInit {

  public ofertas : Oferta[];

  constructor( private oferta : OfertaService) { }

  ngOnInit(): void {
    this.oferta.getOfertas('restaurante')
      .then(itens => {
        this.ofertas = itens;
        console.log(this.ofertas);
      })
  }

}
