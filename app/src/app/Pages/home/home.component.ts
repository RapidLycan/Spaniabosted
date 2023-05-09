import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { CookiesComponent } from 'src/app/Components/cookies/cookies.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    const cookieExists = this.cookieService.check('cookiePolicy');
    if (!cookieExists) {
      this.openDialog();
      this.cookieService.set('cookiePolicy', 'accepted', 30); // set cookie to expire in 30 days
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(CookiesComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: \\${result}`);
    });
  }
}
