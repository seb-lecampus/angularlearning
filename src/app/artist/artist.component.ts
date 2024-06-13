import { Component, Input } from '@angular/core';
import { Artist } from '../type/artist';

@Component({
  selector: 'app-artist',
  standalone: true,
  imports: [],
  template: `
    <div>
      <p>Name: {{artist.name}}</p>
      <p>Img: {{artist.img}}</p>
    </div>
  `,
  styles: ``
})
export class ArtistComponent {
  @Input() artist:Artist = new Artist();
}
