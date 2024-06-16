import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../../models/player.model';
import { PlayerService } from '../../services/player.service';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})


export class CardListComponent implements OnInit {
  players: Player[] = [];
  goalkeepers: any[] = [];
  attackers: any[] = [];
  midfielders: any[] = [];
  defenders: any[] = [];

  constructor(private playersService: PlayerService, private router: Router) { }

  ngOnInit(): void {
    this.playersService.getPlayers().subscribe(data => {
      console.log(data.playerInfo);
      this.players = data.playerInfo;
      this.goalkeepers = this.players.filter(player => player.position === 'Portero');
      this.attackers = this.players.filter(player => player.position === 'Atacante');
      this.midfielders = this.players.filter(player => player.position === 'Centrocampista');
      this.defenders = this.players.filter(player => player.position === 'Defensa');
      console.log(this.attackers);
      
    });
  }

  viewDetails(id: number): void {
    this.router.navigate(['/details', id]);
  }

}
