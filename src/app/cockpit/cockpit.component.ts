import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ servername: string, serverContent: string }>();
  @Output() bluePrintServer = new EventEmitter<{ servername: string, serverContent: string }>();
  newServerName = '';
  newServerContent = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit({servername: this.newServerName, serverContent: this.newServerContent});
  }

  onAddBlueprint() {
    this.bluePrintServer.emit({servername: this.newServerName, serverContent: this.newServerContent});
  }

}
