import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){
    //console.log('before ' + this.isUserLoggedIn());
    if (username === 'furkanguzel' && password === 'dummy'){
      sessionStorage.setItem('authenticaterUser', username);
      //console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }
  
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null) //if it is null not logged in but !null is logged in

  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }

}
