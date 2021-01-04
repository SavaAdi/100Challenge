import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../snackbar/snackbar.service';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { ActivatedRoute } from '@angular/router';

import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-service-documentation',
  templateUrl: './service-documentation.component.html',
  styleUrls: ['./service-documentation.component.scss']
})
export class ServiceDocumentationComponent implements OnInit {

  public user = new User();
  public userIdExample = new User();
  public state: { [key: string]: any } = {};

  constructor(public userService: UserService,
              public snackbarService: SnackbarService,
              public localStorageService: LocalStorageService,
              public route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params
    .pipe(
      map((params) => params.id),
      mergeMap((id) => this.userService.getUserById(id))
    ).subscribe({
      next: (value) => {
        this.userIdExample = value;
      }
    });

    this.localStorageService.state$.subscribe((data) => {
      this.state = data;
    });

    this.userService.getUserById(1).subscribe({
      next: (response: any) => {
        this.user = response;
        console.log(this.user);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Done loading');
      }
    });
  }

  public callSnackbar(): void {
    this.snackbarService.callSnackbar('Snackbar Service Example');
  }

  public updateState(): void {
    this.localStorageService.setState('Hello', 'I am a new state');
  }

}
