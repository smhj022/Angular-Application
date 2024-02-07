import { Component } from '@angular/core';

@Component({
  // Selector as attribute eg. <div app-servers></div>
  // selector: '[app-servers]'
  // Selector by element <app-server></app-server>
  // selector: 'app-servers',

  // Selector by class 
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {

  allowNewServer: boolean = false;
  serverCreationStatus = "No Server was Created!!"
  serverName = "Testserver"

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  onCreateServer() {
    this.serverCreationStatus = this.serverName + " Server was created! "
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
