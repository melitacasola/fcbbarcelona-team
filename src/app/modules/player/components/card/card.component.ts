import { Component, Input } from '@angular/core';
import { IPlayer } from '../../../../models/player.model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',

})

export class CardComponent {
  @Input() player!: IPlayer;
}
