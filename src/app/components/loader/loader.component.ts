import { Component, Input, OnInit } from '@angular/core';
import { LoaderType } from './models/loader-type.enum';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Input() public isLoading = false;
  @Input() public loaderType: LoaderType = LoaderType.Circular;

  // This is actually what the *ngSwitchCase is using as a type
  public LoaderType = LoaderType;

  public get loadingText(): string {
    // DO NOT CONFUSE ` with '. The first one will work the second will not;
    return `${this.loading}${this.loadingPeriods}`;

    // Another way to do it
    // return this.loading;
  }

  private loading = 'Loading';
  // Those empty characters -> \0 together with the fixed h1 width set up in the scss will keep the "Loading..." in place.
  private loadingPeriods = '.\0\0';

  public ngOnInit(): void {
    if (this.loaderType === LoaderType.Loading) {
      this.updateLoaderPeriods();
    }
  }

  private updateLoaderPeriods() {
    let currentStep = 0;

    setInterval(() => {
      switch (currentStep % 3) {
        case 0:
          this.loadingPeriods = '..\0';
          currentStep++;
          break;
        case 1:
          this.loadingPeriods = '...';
          currentStep++;
          break;
        case 2:
          this.loadingPeriods = '.\0\0';
          currentStep = 0;
          break;
      }
    }, 500);
  }
}
