import { Time } from "@angular/common";
import { EGroup } from "../enums/e-group";

export interface IMatch {
  id: number;
  teamOneId: number;
  goalsOneId: number;
  teamTwoId: number;
  goalsTwoId: number;
  group: EGroup;
  status: 'running' | 'finished' | 'scheduled';
  date: Date;
  hour: Time;
}
