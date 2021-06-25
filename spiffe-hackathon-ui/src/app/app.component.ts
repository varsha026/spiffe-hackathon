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
  notification = {
    visible: false,
    message: '',
    type: 'success'
  };

  constructor() { }

  ngOnInit() {
  }
  onSave() {
    this.serviceConfig?.onSave();
  }

  onCloseNotification() {
    this.notification = {
      message: '',
      visible: false,
      type: 'success'
    };
  }

  setNotification(event: any) {
    this.notification = event;
  }
}
