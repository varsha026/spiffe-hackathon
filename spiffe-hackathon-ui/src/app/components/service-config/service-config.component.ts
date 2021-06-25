import { Component, OnInit } from '@angular/core';
import { BasicService } from 'src/app/services/basic.service';

@Component({
  selector: 'app-service-config',
  templateUrl: './service-config.component.html',
  styleUrls: ['./service-config.component.scss']
})
export class ServiceConfigComponent implements OnInit {

  configModel = {
    service1: null,
    service2: null,
    service3: null
  };
  service1: any = null;
  service2: any = null;
  service3: any = null;

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
    });
  }

}
