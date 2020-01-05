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

  showtimes_flag: boolean = true;
  news_flag: boolean = false;
  about_flag: boolean = false;

  movies: Movie[] = MOVIES;

  newsList: News[] = NEWS;

  setShowtimes(){
    this.showtimes_flag = true;
    this.news_flag = false;
    this.about_flag = false;
  }

  setNews(){
    this.showtimes_flag = false;
    this.news_flag = true;
    this.about_flag = false;
  }

  setAbout(){
    this.showtimes_flag = false;
    this.news_flag = false;
    this.about_flag = true;
  }

}
