import { Component, OnInit, Input } from '@angular/core';
import { News } from '../models/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() news: News;

  desc_flag: boolean = false;

  changeFlag(){
    if(this.desc_flag === false)
      this.desc_flag = true;
      
    else
      this.desc_flag = false;
  }

}