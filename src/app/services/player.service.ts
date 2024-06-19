import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Player } from '../models/Player.class';

@Injectable({
  providedIn: 'root'
})

export class PlayerService {

  private playersUrl = 'assets/players.json';

  private http= inject(HttpClient);

  getPlayers(): Observable<Player[]> {
    return this.http.get<{ playerInfo: Player[] }>(this.playersUrl).pipe(
      map(response => response.playerInfo)
    );
  }

  getPlayerById(playerId: number): Observable<Player | undefined> {
    return this.getPlayers().pipe(
      map(players => players.find(player => player.playerId === playerId))
    );
  }

}
