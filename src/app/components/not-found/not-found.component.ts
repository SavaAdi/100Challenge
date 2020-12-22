import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  private redirectCount = 10;
  private redirectInterval;

  constructor(public router: Router) {
    this.redirectCount = 10;
   }

  public get redirectMessage(): string {
    if (this.redirectCount <= 0) {
      return 'Redirecting ...';
    }

    return `Redirecting you to home page in ${this.redirectCount}.`;
  }

  public ngOnInit(): void {
    this.redirectInterval = setInterval(() => {
      this.redirectCount--;

      if (this.redirectCount <= 0) {
        this.redirectHomepage();
      }
    }, 1000);
  }

  // If you don't clear the interval it will continously redirect to the homepage. This was a good exercise
  private redirectHomepage(): void {
    clearInterval(this.redirectInterval);
    this.router.navigate(['']);
  }
}
