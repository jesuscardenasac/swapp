import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AmplifyService }  from 'aws-amplify-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  signedIn = false;
  resolve = true;

  constructor(public router: Router, public amplifyService: AmplifyService) {
  }

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise((resolve) => {
      this.amplifyService.authStateChange$.subscribe( (authState)  => {
        this.signedIn = authState.state === 'signedIn';
        if(state.url != '/auth' && !this.signedIn){
          this.router.navigateByUrl('/auth');
          this.resolve = false;
        }else if(this.signedIn && state.url === '/auth'){
          this.router.navigateByUrl('/home');
          this.resolve = false;
        }else
        this.resolve = true;

        resolve(this.resolve);
      })
    });
  }
  
}
