import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

//req: the outgoing http request
//next : function to pass the request to the next handler
export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const auth =inject(AuthService)

  const token = auth.token()

  // If user is not logged in, pass request as it is
  if(!token){
    return next(req); 
  }
  
  // requerst is immutable
  // so clone the request and add the authorization header with Bearer token
  const cloned = req.clone({
    setHeaders:{
      Authorization: `Bearer ${token}`
    }
  })

  // pass the cloned request to the next handler
  return next(cloned)
};
