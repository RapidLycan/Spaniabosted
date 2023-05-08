import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent {
  employees = [
    {
      name: 'Markus Lundberg',
      position: 'Eier og eindomsmegler',
      img: '/assets/employees/man1.png',
      description: 'markus@spaniabosted.no',
    },
    {
      name: 'Anders Westad',
      position: 'Eier og eindomsmegler',
      img: '/assets/employees/man2.png',
      description: 'anders@spaniabosted.no',
    },
    {
      name: 'Thomas Bårnheim',
      position: 'CEO for spaniabostader.se',
      img: '/assets/employees/man3.png',
      description: 'thomas@spaniabostader.se',
    },
    {
      name: 'Camilla Skavikeng',
      position: 'Eindomsmegler',
      img: '/assets/employees/lad1.png',
      description: 'camilla@spaniabosted.no',
    },
  ];
}
