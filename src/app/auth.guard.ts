import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { AmplifyService } from 'aws-amplify-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  signedIn: any;
  resolve = true;

  constructor(private router: Router, private amplifyService: AmplifyService) {
  }

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.amplifyService.authStateChange$.map((authState)  => {
      
      /*if(state.url != '/auth' && authState.state != 'signedIn'){
        this.router.navigate(['auth']);
        this.resolve = false;
      }else if(authState.state == 'signedIn' && state.url == '/auth'){
        return true;
        this.router.navigate(['home']);
        this.resolve = false;
      }else
      this.resolve = true;*/

      if(authState.state == 'signedIn'){
        this.router.navigate(['home']);
        this.resolve = false;
      }

      return this.resolve;
    });

  }
  
}
