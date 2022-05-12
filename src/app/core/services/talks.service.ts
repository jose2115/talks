import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const base_url = environment.base_url

@Injectable({
  providedIn: 'root'
})
export class TalksService {

  private _refresh = new Subject<void>();

constructor(
  private http:HttpClient
) { }

  get refresh(){
    return this._refresh;
  }

  onTalks():Observable<any>{
    const direccion = `${base_url}/talks`;
    return this.http.get(direccion).pipe(
      tap( (resp)=> {
        
      })
    );
  }

  //metodo para crear un grupo
  onCreateTalks(formData:any){

  const direccion = `${base_url}/create/talks`;
  return this.http.post(direccion, formData).pipe(
    tap((resp:any)=> {
      this._refresh.next();
    })
  );
}

}

