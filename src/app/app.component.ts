import { Component, OnInit } from '@angular/core';
import { Movie } from './models/movie';
import { News } from './models/news';
import { MOVIES } from '../movies-data';
import { NEWS } from '../news-data';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { MovieService } from './movie.service';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  section: number = 0; // 0 - Showtimes(Movies), 1 - News, 2 - About

  dark_flag: boolean = true;
  white_flag: boolean = false;
  popup_flag: boolean = false;

  movies: Movie[];

  newsList: News[] = NEWS;

  currentMovie: Movie;
  currentGenres: string;

  constructor(private movieService: MovieService) { }

  ngOnInit(){
    this.getMovies();
  }

  getMovies(){
    this.movieService.getMovies().subscribe( data => this.movies = data);
  }

  updateMovie(m: Movie){
    this.movieService.updateMovie(m).subscribe( data => console.log(data));
  }

  updateRating(num: number){
    let l: number = this.currentMovie.ratings.length;
    this.currentMovie.ratings[l] = num;

    let total: number = 0;
    for(let i=0; i<l+1; i++){
      total += this.currentMovie.ratings[i];
    }

    this.currentMovie.averageRating = this.round(total / (l+1), 1).toFixed(1);

    this.updateMovie(this.currentMovie);
  }

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

  setPopup(m: Movie){
    this.currentMovie = m;
    this.popup_flag = true;

    this.currentGenres = m.genres[0];
    let k: number = m.genres.length;
    for(let i=1; i<k; i++){
      this.currentGenres = this.currentGenres + ", " + m.genres[i];
    }
  }

  round(value: number, precision: number) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

}