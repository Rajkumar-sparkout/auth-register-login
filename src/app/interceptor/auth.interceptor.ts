import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Auth interceptor called');
    return next.handle(req)
  }

  // The angular interceptor help us to modify the HTTP request by intercepting it before the request is sent to the server.
  // it can also modify the incomming response from the Server.

  //    *The interceptor globally catchesevery outgoing and in incomming request at al single place

  //    *We can use it to add custome headers to the outgoing request, log the incommi9ng response, etc.

}
