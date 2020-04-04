import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { AmplifyService } from 'aws-amplify-angular';

@Injectable({
  providedIn: 'root'
})
export class Auth1Guard implements CanActivate {
  
  signedIn: any;
  resolve = true;

  constructor(private router: Router, private amplifyService: AmplifyService) {
  }

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.amplifyService.authStateChange$.map((authState)  => {

      console.log(state.url,authState.state);
      console.log(state.url != '/auth' && authState.state != 'signedIn');
      console.log(authState.state == 'signedIn' && state.url == '/auth');
      
      if(state.url != '/auth' && authState.state != 'signedIn'){
        this.router.navigate(['auth']);
        this.resolve = false;
      }else if(authState.state == 'signedIn' && state.url == '/auth'){
        this.router.navigate(['home']);
        this.resolve = false;
      }else this.resolve = true;

      return this.resolve;
    });

  }

}
