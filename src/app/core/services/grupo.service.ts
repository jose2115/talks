import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';


const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  private _refresh = new Subject<void>();

constructor(
  private http:HttpClient
) { }

get refresh(){
  return this._refresh;
}

onGrupos():Observable<any>{
  const direccion = `${base_url}/groups`;
  return this.http.get(direccion).pipe(
    tap( (resp)=> {
      
    })
  );

}


//metodo para crear un grupo
onCreateGrupo(formData:any){

  console.log("formulario", formData);
  const direccion = `${base_url}/create/groups`;
  return this.http.post(direccion, formData).pipe(
    tap((resp:any)=> {
      this._refresh.next();
    })
  );
}

}


