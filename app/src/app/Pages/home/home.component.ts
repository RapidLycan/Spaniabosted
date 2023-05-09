import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CookiesComponent } from 'src/app/Components/cookies/cookies.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(CookiesComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: \${result}`);
    });
  }
}
