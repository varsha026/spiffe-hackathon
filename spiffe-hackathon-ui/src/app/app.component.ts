import { Component, ViewChild } from '@angular/core';
import { ServiceConfigComponent } from './components/service-config/service-config.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('serviceConfig') serviceConfig: ServiceConfigComponent | undefined;
  activeTab: string = 'service';
  title = 'spiffe-hackathon-ui';

  constructor() { }

  onSave() {
    this.serviceConfig?.onSave();
  }
}
