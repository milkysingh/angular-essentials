import { Component, OnInit, Input } from '@angular/core';
import { StarwarService } from '../services/starwar.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
@Input() characterItem;


constructor(private swService: StarwarService) {
}
ngOnInit() {
}
sideChosen(side) {

  this.swService.onSideAssigned({
    name: this.characterItem.name,
    side: side
  });

}

}

