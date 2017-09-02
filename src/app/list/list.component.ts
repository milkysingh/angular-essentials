import { Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute  } from '@angular/router';
import { StarwarService } from '../services/starwar.service';
import {Subscription} from 'rxjs/Subscription'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  characters = [];
  loadedSide = 'all';
  subscription: Subscription;
  constructor(private activatedRoute: ActivatedRoute, private swService: StarwarService) {}

  ngOnInit() {

    this.activatedRoute.params.subscribe(

      (params) => {

        this.loadedSide = params.side;

        this.characters = this.swService.getCharacters(params.side);
      }

    );

    this.subscription = this.swService.characterChanged.subscribe(
      () => {
        this.characters = this.swService.getCharacters(this.loadedSide);
      }

    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

