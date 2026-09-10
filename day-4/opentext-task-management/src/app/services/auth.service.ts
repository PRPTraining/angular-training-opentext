import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly _token =signal<string|null>(null)

  readonly token = this._token.asReadonly()

  readonly isLoggedIn = computed(()=> this._token()!==null)

  login(username:string,password:string):void{
    // normally we will invoke the login api and get the token
    const fakeJwt = btoa(JSON.stringify({sub:username,iat:Date.now()}))
    this._token.set(fakeJwt)
  }

  logout():void{
    this._token.set(null)
  }
}
