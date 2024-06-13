import { Component, EventEmitter, Output } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Artist } from '../type/artist';

@Component({
  selector: 'app-artist-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]=artistForm (ngSubmit)="handleSubmit()">
      <label for="Name">Name: <input id="Name" type="text" formControlName="Name"/></label>
      <label for="Img">Name: <input id="Img" type="text" formControlName="Img"/></label>
      <button type="submit" [disabled]="!artistForm.valid">Submit</button>
    </form>
  `,
  styles: ``
})
export class ArtistFormComponent {
  asciiValidator:ValidatorFn = (ctrl) => {
    if(!/^\w+$/i.test(ctrl.value))
      return { 'asciiValidator': {reason: 'not ascii only', value: ctrl.value}}
    return null
  }
  
  artistForm = new FormGroup({
    Name: new FormControl('', this.asciiValidator),
    Img: new FormControl(''),
  });

  @Output() newArtistEvent = new EventEmitter<Artist>

  handleSubmit(){
    this.newArtistEvent.emit(new Artist(this.artistForm.value.Name?.toString(), this.artistForm.value.Img?.toString()))
  }

  // https://guide-angular.wishtack.io/angular/formulaires/reactive-forms/validation

  /*textValidator(nameRe: RegExp): ValidatorFn {
    return (ctrl:AbstractControl): ValidationErrors | null => {
      return nameRe.test(ctrl.value) ? {forbiddenName: {value: ctrl.value}} : null;
    }
  }*/

  
}


