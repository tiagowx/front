import { Component } from '@angular/core';
import { EGroup } from 'src/app/enums/e-group';
import { ICountry} from '../../interfaces/icountry'

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent {
  countries!: ICountry[];
  count!:EGroup;

  constructor(){
    this.countries = [];
    for (let i = 0; i < this.countries.length; i++) {

    }
  }
}
