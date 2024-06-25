import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../../../../services/player.service';
import { Player } from '../../../../models/Player.class';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})


export class CardListComponent implements OnInit {
  private playersService = inject(PlayerService);
  private router = inject(Router);

  players: Player[] = [];

  goalkeepers: any[] = [];
  attackers: any[] = [];
  midfielders: any[] = [];
  defenders: any[] = [];

  ngOnInit(): void {
    this.playersService.getPlayers().subscribe(data => {

      this.players = data;
      this.goalkeepers = this.players.filter(player => player.position === 'Portero');
      this.attackers = this.players.filter(player => player.position === 'Atacante');
      this.midfielders = this.players.filter(player => player.position === 'Centrocampista');
      this.defenders = this.players.filter(player => player.position === 'Defensa');

    });
  }

  viewDetails(id: number): void {
    this.router.navigate(['/details', id]);
  }

}
