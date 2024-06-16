import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})

export class PlayerService {

  private playersUrl = 'assets/players.json';

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<any> {
    return this.http.get<any[]>(this.playersUrl);
  }
  
  getPlayerById(playerId: number): Observable<Player> {
    return this.http.get<Player[]>(`${this.playersUrl}/cards/${playerId}`)
    .pipe(map(players => players[0]));
  }

}
