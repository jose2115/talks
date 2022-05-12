import { Component, OnInit } from '@angular/core';
import { GrupoService } from 'src/app/core/services/grupo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {
  grupos: any;

  constructor(
    private group: GrupoService
  ) { }

  public suscription: Subscription;

  ngOnInit() {

    this.onListGrupo();

    this.suscription = this.group.refresh.subscribe(() => {
      this.onListGrupo();
    })
  }

  onListGrupo(){

    this.group.onGrupos()
    .subscribe( data => {
        this.grupos = data;
      console.log("cotizaciones",this.grupos);
      
    })
  }

}
