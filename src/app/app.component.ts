import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrementaContador, IAppState, incrementaContador } from './store/app.state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projeto';
 

  constructor(private store: Store<{ app: IAppState}>){}

  counter$ = this.store
                    .select('app')
                    .pipe(
                      map( e => e.counter)
                      );


  incrementarContador() {
    this.store.dispatch(incrementaContador());
  }   
  
  decrementarContador() {
    this.store.dispatch(decrementaContador());
  }
}
