import { Routes } from '@angular/router';
import { PageArtisitsComponent } from './page-artisits/page-artisits.component';
import { PageHelloComponent } from './page-hello/page-hello.component';

export const routes: Routes = [
    { path: 'welcome', component: PageHelloComponent },
    { path: 'artists', component: PageArtisitsComponent },
];
