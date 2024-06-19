import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { CardComponent } from './components/card/card.component';
import { PlayerRoutingModule } from './player-routing.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PlayerService } from '../../services/player.service';



@NgModule({
  declarations: [CardListComponent, CardDetailsComponent, CardComponent],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    RouterModule,
    TranslateModule,
    RouterOutlet
  ],
  providers: [PlayerService]
})
export class PlayerModule { }
