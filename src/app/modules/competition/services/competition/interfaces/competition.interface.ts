export interface ICompetitionRow {
  id: number;
  idCom: number;
  // competicion: Competiciones;
  referencia1: string | null;
  idEqu: number;
  // equipo: Equipos;
  posicion: number | null;
  referencia2: string | null;
  puntos: number | null;
  jugados: number | null;
  ganados: number | null;
  empatados: number | null;
  perdidos: number | null;
  afavor: number | null;
  encontra: number | null;
  sancion: number | null;
  idCol1: number | null;
  // colPre: ColPre;
  idCol2: number | null;
  // colNum: ColNum;
  idCol3: number | null;
  // colNom: ColNom;
  idExp: number | null;
  // exp: Exp;
  comentario: string | null;
  fechaCreacion: Date | null;
  usuarioCreacion: number | null;
}

export type ICompetitionTable = Array<ICompetitionRow>;
