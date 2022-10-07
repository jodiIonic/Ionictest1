import { Component } from '@angular/core';
import { IonicCordo }

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  display(){
    IonicCordova.deploy.getCurrentVersion();
  }

}

//adding for the push for repo

//test

//test again to add 