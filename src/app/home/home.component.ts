import { Component, OnInit, Input } from '@angular/core';
import {OfertaService} from '../../ofertas.service';
import {Oferta} from '../oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [OfertaService]
})
export class HomeComponent implements OnInit {

  public ofertas : Oferta[];

  constructor(public oferta : OfertaService) { }

  ngOnInit(): void {
    this.oferta.getOfertas('restaurante')
      .then(ofertas => {
        this.ofertas = ofertas;
      })
  }
}
