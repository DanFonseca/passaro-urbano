import { Component, OnInit } from '@angular/core';
import {OfertaService} from '../../ofertas.service';
import {Oferta} from '../oferta.model';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertaService]
})
export class DiversaoComponent implements OnInit {

  public ofertas : Oferta[];

  constructor(private oferta: OfertaService) { }

  ngOnInit(): void {
    this.oferta.getOfertas('diversao')
      .then(itens => {
        this.ofertas = itens;
      })
  }

}
