import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  @Input() movie: Movie;

  @Input() dark_flag: boolean = true;
  @Input() white_flag: boolean = false;

  @Output() readmeEvent = new EventEmitter();

  setPopup(){
    this.readmeEvent.emit(this.movie);
  }

}
