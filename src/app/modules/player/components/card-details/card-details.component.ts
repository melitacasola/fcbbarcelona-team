import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../../../../services/player.service';
import { IPlayer } from '../../../../models/player.model';



@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.css'
})


export class CardDetailsComponent implements OnInit {

  player: IPlayer | undefined;

  private route= inject(ActivatedRoute)
  private playerService= inject(PlayerService)

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.playerService.getPlayerById(id).subscribe(player => {
      this.player = player;
    });
  }

}
