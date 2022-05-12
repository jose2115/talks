import { Component, OnInit } from '@angular/core';
import { TalksService } from 'src/app/core/services/talks.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  talks: any;

  constructor(
    private talk: TalksService
  ) { }

  public suscription: Subscription;

  ngOnInit() {
    this.onListTalks();

    this.suscription = this.talk.refresh.subscribe(() => {
      this.onListTalks();
    })
  }

  onListTalks(){

    this.talk.onTalks().subscribe( data => {
        this.talks = data.length;
    })
  }

}
