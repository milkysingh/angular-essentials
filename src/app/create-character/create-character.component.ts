import {Component, OnInit} from '@angular/core';
import {StarwarService} from '../services/starwar.service';
@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  availableSide = [{
      display: 'none',
      value: ''
    },
    {
      display: 'Light',
      value: 'light'
    },
    {
      display: 'Dark',
      value: 'dark'
    }
  ]
  constructor(private starwarService: StarwarService) {}

  onSubmit(form) {
    if (form.invalid) {
      return;
    }
    this.starwarService.addCharacters(form.value.name, form.value.side);
  }


  ngOnInit() {}


}
