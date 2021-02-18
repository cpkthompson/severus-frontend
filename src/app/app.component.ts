import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  teams = [
    'MEST Africa',
    'MEST Incubator (Nigeria)',
    'MEST Incubator (South Africa)',
    'MEST Incubator (Ghana)',
    'MEST Incubator (Kenya)',
  ];
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    title: new FormControl(''),
    team: new FormControl(),
    skypeId: new FormControl(''),
    country1: new FormControl('GH'),
    phoneNumber1: new FormControl(''),
    country2: new FormControl('GH'),
    phoneNumber2: new FormControl(''),
  });
  secondForm = false;
}
