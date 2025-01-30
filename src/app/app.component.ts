import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AboutComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrls: [] // O verifica si el archivo existe
})
export class AppComponent {
  title = 'PaginaWeb-Perfil';
}
