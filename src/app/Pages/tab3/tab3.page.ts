import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public storage: Storage) {
const token : any = this.storage.get('token');

console.log(token.__zone_symbol__value);
  }


}
