/* eslint-disable import/prefer-default-export, no-empty-function, no-return-assign, no-unused-vars, no-useless-constructor, sort-imports */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GamingChart } from './gaming-chart.model';

@Injectable({
  providedIn: 'root',
})
export class GamingChartService {
  constructor(private http: HttpClient) {}

  readonly baseUrl = 'https://localhost:23528/api/games';

  list: GamingChart[] = [];

  async getTopPlaytimeByPlaytime(minPlaytime?: number, maxPlaytime?: number) {
    this.http
      .get<GamingChart[]>(
        `${this.baseUrl}/top-games-by-playtime?minPlaytime=${minPlaytime}&maxPlaytime=${maxPlaytime}`
      )
      .toPromise()
      .then((res) => (this.list = res as GamingChart[]));
  }

  async getTopPlaytimeByUserId(userId: number) {
    await this.http
      .get<GamingChart[]>(`${this.baseUrl}/top-games-by-user-id/${userId}`)
      .toPromise()
      .then((res) => (this.list = res as GamingChart[]));
  }
}
