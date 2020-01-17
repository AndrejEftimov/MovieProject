import { Component } from '@angular/core';
import { Movie } from './models/movie';
import { News } from './models/news';
import { MOVIES } from '../movies-data';
import { NEWS } from '../news-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  section: number = 0; // 0 - Showtimes, 1 - News, 2 - About

  dark_flag: boolean = true;
  white_flag: boolean = false;

  movies: Movie[] = MOVIES;

  newsList: News[] = NEWS;

  setShowtimes(){
    this.section = 0;
  }

  setNews(){
    this.section = 1;
  }

  setAbout(){
    this.section = 2;
  }


  setDarkBlue(){
    this.dark_flag = true;
    this.white_flag = false;
  }

  setWhiteRed(){
    this.dark_flag = false;
    this.white_flag = true;
  }

}