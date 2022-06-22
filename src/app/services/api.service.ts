import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient ) { }

  postClassse(data : any){
    return this.http.post<any>("http://localhost:3000/classeList",data);
  }
  getClasse(){
    return  this.http.get<any>("http://localhost:3000/classeList")
  }
  putClasse(data:any,id : number){
    return this.http.put<any>("http://localhost:3000/classeList/"+id ,data)
  }
  deleteClasse(id : number){
    return this.http.delete<any>("http://localhost:3000/classeList/"+id )
  }

  postEleve(data : any){
    return this.http.post<any>("http://localhost:3000/eleveList",data);
  }
  getEleve(){
    return  this.http.get<any>("http://localhost:3000/eleveList")
  }
  putEleve(data:any,id : number){
    return this.http.put<any>("http://localhost:3000/eleveList/"+id ,data)
  }
  deleteEleve(id : number){
    return this.http.delete<any>("http://localhost:3000/eleveList/"+id )
  }
}
