import { Component, OnInit } from '@angular/core';
import {faPhoneVolume,faEnvelope,faMapLocation} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faPhoneVolume=faPhoneVolume;
  faEnvelope=faEnvelope;
  faMapLocation=faMapLocation;
  constructor() { }

  ngOnInit(): void {
  }

}
