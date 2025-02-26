import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs';
import { Pipe } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  Post(data:any){
    return this._http.post<any>("http://localhost:3000/posts",data)
    .pipe(map((response:any)=>{
      return response;
    }))
  }

  Delete(id: number){
  return this._http.delete<any>("http://localhost:3000/posts/"+id)
  .pipe(map((response:any)=>{
    return response;
  }))

} 
updateData(data:any, id:number){
return this._http.put<any>("http://localhost:3000/posts/"+id,data)
.pipe(map((response:any)=>{
  return response;

}))
}
getData(data:any){
  return this._http.get<any>("http://localhost:3000/posts/",data)
  .pipe(map((res:any)=>{
    return res;
  }))
}
}
