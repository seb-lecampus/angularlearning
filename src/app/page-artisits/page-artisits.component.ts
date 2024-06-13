import { Component } from '@angular/core';
import { Artist } from '../type/artist';
import { ListComponent } from '../list/list.component';
import { ArtistFormComponent } from '../artist-form/artist-form.component';

@Component({
  selector: 'app-page-artisits',
  standalone: true,
  imports: [ListComponent, ArtistFormComponent],
  template: `
    <p>{{title}}</p>
    <app-list [artists]=artists />
    <app-artist-form (newArtistEvent)="addArtist($event)"/>
  `,
  styles: ``
})
export class PageArtisitsComponent {
  title = 'PROJ';
  artists:Array<Artist> = [new Artist("sdqf", "hbug"), new Artist("jug", "hbug"), new Artist("juukyg", "hbug")]
  addArtist(a:Artist){
    this.artists.push(a)
  }
}
