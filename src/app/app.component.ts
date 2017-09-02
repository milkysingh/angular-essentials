import { Component, OnInit} from '@angular/core';
import { StarwarService} from './services/starwar.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private swService: StarwarService) {}
  ngOnInit() {
    this.swService.fetchCharacters();
  }
}
