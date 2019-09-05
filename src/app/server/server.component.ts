import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId = 10; // serverId: number =
    serverStatus = "offline"; //serverStatus: string =
    // add method
    getServerStatus() {
        return this.serverStatus;
    }

}