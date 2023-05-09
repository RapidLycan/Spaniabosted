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
      name: 'Prosjekt 1rt',
      link: 'Expansion',
    },
    {
      name: 'Prosjekt 1ft',
      link: 'Expansion',
    },
    {
      name: 'Prosjekt 2hl',
      link: 'Expansion',
    },
    {
      name: 'Prosjekt 12x',
      link: 'Expansion',
    },
    {
      name: 'Prosjekt 3ox',
      link: 'Innovation',
    },
    {
      name: 'Prosjekt 5pl',
      link: 'Innovation',
    },
    {
      name: 'Prosjekt 9tx',
      link: 'Innovation',
    },
    {
      name: 'Prosjekt 9sx',
      link: 'Innovation',
    },
  ];
}
