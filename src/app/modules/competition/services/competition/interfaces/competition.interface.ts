export interface ICompetitionRow {
  antColor: number;
  posColor: number;
  position: number;
  teamName: string;
  teamLogoId: number;
  teamId: number;
  playedGames: number;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  sanction: number;
}

export type ICompetitionTable = Array<ICompetitionRow>;
