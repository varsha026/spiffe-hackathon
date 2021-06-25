import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BasicService } from 'src/app/services/basic.service';

@Component({
  selector: 'app-service-config',
  templateUrl: './service-config.component.html',
  styleUrls: ['./service-config.component.scss']
})
export class ServiceConfigComponent implements OnInit {
  @Output() notificationEmitter = new EventEmitter();

  constructor(private basicService: BasicService) { }

  ngOnInit(): void {
  }

  createForm() {
  }

  onSave() {
    var payload: any[] = [];
    var elem: any[] = [];
    elem.push({ serviceName: 'SpringBootService', domElem: document.querySelector('#service1Select') });
    elem.push({ serviceName: 'EchoService', domElem: document.querySelector('#service2Select') });
    elem.forEach(elementArr => {
      if (elementArr.domElem.value) {
        var servicesToCommunicate: any[] = [];
        elementArr.domElem.value.forEach((element: any) => {
          servicesToCommunicate.push(element.value);
        });
        payload.push({ serviceName: elementArr.serviceName, servicesToCommunicate: servicesToCommunicate });
      }
    });
    console.log(payload);
    this.basicService.updateServiceConfig(payload).subscribe((res) => {
      console.log("Response:", res);
      this.notificationEmitter.emit({
        type: 'success',
        message: 'Updated successfully',
        visible: true
      });
    }, err => {
      this.notificationEmitter.emit({
        type: 'error',
        message: 'Error connecting to service',
        visible: true
      });
    });
  }

}
