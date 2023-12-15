import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICompetitionTable } from './interfaces/competition.interface';

@Injectable({
  providedIn: 'root',
})
export class CompetitionService {
  private readonly BASE_URL = '/api/';

  constructor(private readonly _httpClient: HttpClient) {}

  public getCompetitionTable(
    competitionId: number
  ): Observable<ICompetitionTable> {
    return this._httpClient.get<ICompetitionTable>(
      `${this.BASE_URL}clasificaciones/${competitionId}`
    );
  }
}
