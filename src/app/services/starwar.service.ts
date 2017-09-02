import { Subject } from 'rxjs/Subject';
import {Injectable} from '@angular/core'
import { Http, Response  } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class StarwarService {

  characters = [{
      name: 'Malkeet SIngh',
      side: ''
    },
    {
      name: 'Aman',
      side: ''
    },

  ];
  characterChanged = new Subject < void > ();
  constructor(private http: Http) {}

  fetchCharacters() {
    this.http.get('https://swapi.co/api/people')
      .map((response: Response) => {
        const data = response.json();
        const extractedChar = data.results;
        const chars = extractedChar.map((char) => {
          return {
            name: char.name,
            side: ''
          }
        });
        return chars;
      })
      .subscribe(
        (data) => {
          console.log(data);
          this.characters.push(...data);
          this.characterChanged.next();
        }
      )
  }
  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    });
  }

  onSideAssigned(info) {

    const pos = this.characters.findIndex((char) => {
      return char.name === info.name;
    });

    this.characters[pos].side = info.side;
    this.characterChanged.next();
  }

  addCharacters(name, side) {
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    });
    if (pos !== -1) {
      return;
    }

    const newchar = {
      name: name,
      side: side
    };
    this.characters.push(newchar);
  }
}

