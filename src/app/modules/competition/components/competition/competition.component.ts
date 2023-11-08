import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';
import { CompetitionService } from '../../services/competition/competition.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ICompetitionTable } from '../../services/competition/interfaces/competition.interface';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompetitionComponent {
  public tableData: Signal<ICompetitionTable>;
  public displayedColumns: Array<string> = [
    'position',
    'team',
    'points',
    'playedGames',
    'won',
    'draw',
    'lost',
    'goalsFor',
    'goalsAgainst',
    'goalDifference',
    'sanction',
  ];

  constructor(private readonly competitionService: CompetitionService) {
    this.tableData = toSignal(this.competitionService.getCompetitionTable());
  }
}
