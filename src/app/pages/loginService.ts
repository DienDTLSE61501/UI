import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  constructor() {
  }
  ValidateUser(username: string, password: string) {
    ////fake login service
    if (username == 'admin' && password == 'admin') {
      ///Actual API call that  will return valid user
      const user = {
        role: 'admin',
        id: '1aaa8c4f-7788-4485-ad2c-d319283d6bOf'
      }
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }else if (username === 'operator' && password === 'operator') {
      const user = {
        role: 'operator',
        id: '64b73a15-d614-4abc-a0f8-f111100c45cO'
      }
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }else {
      localStorage.removeItem('user');
      return false;
    }
  }
}
