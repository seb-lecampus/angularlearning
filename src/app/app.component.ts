import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ListComponent],
  template: `
  <nav><a routerLink="/welcome">Welcome</a> | <a routerLink="/artists">Artists</a></nav>  
  <main>
    <router-outlet />
  </main>`,
  styles: ''
})
export class AppComponent {
  
}
