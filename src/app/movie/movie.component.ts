import { Component, OnInit, Input, Inject } from '@angular/core';
import { Movie } from '../models/movie';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  @Input() movie: Movie;

  @Input() dark_flag: boolean = true;
  @Input() white_flag: boolean = false;


  openDialog(): void {
    const dialogRef = this.dialog.open(MovieDetailsComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
