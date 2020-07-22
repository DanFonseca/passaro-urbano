import {Routes} from '@Angular/router'

import {DiversaoComponent} from './diversao/diversao.component'
import {RestauranteComponent} from './restaurante/restaurante.component'
import {HomeComponent} from './home/home.component'

export const ROUTES : Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurante', component: RestauranteComponent },
  { path: 'diversao', component: DiversaoComponent }
]
