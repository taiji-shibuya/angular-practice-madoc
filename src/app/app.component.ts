import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  test = 'This is test variable';

  // data = axios
  //   .get('https://tokutake-api.myfoot.info/api/v1/contact-types/', {
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //       'X-Requested-With': 'XMLHttpRequest'
  //     }
  //   })
  //   .then(val => console.log(val))
  //   .catch(() => console.log('catch'));
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
