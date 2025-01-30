import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectsComponent, // Importa el componente standalone aquí
    ContactComponent,  // Importa el componente standalone aquí
    AboutComponent     // Importa el componente standalone aquí
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
