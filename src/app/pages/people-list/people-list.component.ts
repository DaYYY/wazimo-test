import { Component, OnInit } from '@angular/core';
import { Person, Gender } from 'src/app/interfaces/person.interface';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  people: Person[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Person[]>('http://localhost:4200/static.aoni.io/demo/user.json')
      .pipe(take(1))
      .subscribe(result => {
        console.log(result.length);
        this.people = result;
      });
  }

}
