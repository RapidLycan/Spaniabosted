import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects-grid',
  templateUrl: './projects-grid.component.html',
  styleUrls: ['./projects-grid.component.scss'],
})
export class ProjectsGridComponent {
  @Input() limit: number = 8;
  data = [
    {
      name: 'Project 1rt',
      link: 'Expansion',
    },
    {
      name: 'Project 1ft',
      link: 'Expansion',
    },
    {
      name: 'Project 2hl',
      link: 'Expansion',
    },
    {
      name: 'Project 12x',
      link: 'Expansion',
    },
    {
      name: 'Project 3ox',
      link: 'Innovation',
    },
    {
      name: 'Project 5pl',
      link: 'Innovation',
    },
    {
      name: 'Project 9tx',
      link: 'Innovation',
    },
    {
      name: 'Project 9sx',
      link: 'Innovation',
    },
  ];
}
