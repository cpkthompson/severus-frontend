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
  signatureImages = [
    'assets/images/signatures/Cap2.1.png',
    'assets/images/signatures/Cap2.2.png',
    'assets/images/signatures/Cap2.3.png',
    'assets/images/signatures/Cap2.4.png',
    'assets/images/signatures/Cap2.5.png',
    'assets/images/signatures/Cap2.6.png',
    'assets/images/signatures/Email%20Signatures.png',
    'assets/images/signatures/Email%20Signatures%20(1).png',
    'assets/images/signatures/Email%20Signatures%20(2).png',
  ];

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    title: new FormControl(''),
    team: new FormControl(),
    skypeId: new FormControl(''),
    country1: new FormControl(''),
    phoneNumber1: new FormControl(''),
    country2: new FormControl(''),
    phoneNumber2: new FormControl(''),
  });
  secondForm = false;
  signatureImage = this.signatureImages[1];
}
