import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { HttpEvent, HttpEventType } from '@angular/common/http';

import { DataStorageService } from '../../shared/data-storage.service';
import * as fromApp from '../../store/app.reducers';
import { Observable } from 'rxjs/observable';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as AuthActions from '../../auth/store/auth.actions';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  authState: Observable<fromAuth.State>;
  constructor(private dataStorageService: DataStorageService,
              private store: Store<fromApp.AppState>
            ) {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }
  
  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }
}
