import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'blueprint', name: 'test', content: 'just test'}];



  onAddServer( eventData: { servername: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: eventData.servername,
      content: eventData.serverContent
    });
  }

  onAddBlueprint(bluetData: { servername: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluetData.servername,
      content: bluetData.serverContent
    });
  }
}
