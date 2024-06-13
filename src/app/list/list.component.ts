import { Component, Input } from '@angular/core';
import { Artist } from '../type/artist';
import { ArtistComponent } from '../artist/artist.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ArtistComponent],
  template: `
  <ul>  
    @for(artist of artists; track artist.name){
      @if(artist.visibility){
        <li><app-artist (click)="artist.setVisibility()" [artist]=artist /></li>
      }
    }
  </ul>
  <p (click)="showAll()">ShowAll</p>
  `,
  styles: ``
})
export class ListComponent {
  @Input() artists:Array<Artist> = [];

  showAll() {
    for(const artist of this.artists){
      artist.setVisibility(true)
    }
  }
}
