import { Component, signal, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {EuclidesEditorComponent} from 'euclides-editor'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EuclidesEditorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  editor = viewChild(EuclidesEditorComponent);
  
  protected readonly title = signal('euclides-editor-landing');


  scrollToInstall(){
    const el = document.getElementById('instalacion');
    if(el){
      el.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  }
}
