import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.scss']
})
export class StarRatingsComponent implements OnInit {

  @Input() public rating = 0;

  public get fullStars(): number[] {
    const totalFullStars = Math.floor(this.rating);
// we fill it with 0 because the value doesn't matter, we just need this for the *ngFor
    return Array(totalFullStars).fill(0);
  }

  public get hasHalfStar(): boolean {
    const hasHalfStar = (this.rating - Math.floor(this.rating) >= 0.5);
    return hasHalfStar;
  }

  public get emptyStars(): number[] {
    const highestRating = 5;
    const totalEmptyStars = Math.floor(highestRating - this.rating);

    return Array(totalEmptyStars).fill(0);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
