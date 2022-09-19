import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { APIResponse  } from "src/interfaces/interface";
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor( 
    private http: HttpClient,
    ) { }

  async addTodo(data: Object) {
    try {
      let res = (await this.http.post(environment.API + "/addTodo", data).toPromise()) as APIResponse;
      if (res.status === "success") {
        return res.result;
      }
      throw new Error(res.code);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  async getAllTodo(){
    try {
      let res = (await this.http.get(environment.API + "/getAllTodo").toPromise()) as APIResponse;
      if (res.status === "success") {
        return res.result;
      }
      throw new Error(res.code);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  async updateTodo(id: any, data: any) {
    try {
      let res = (await this.http.post(environment.API + "/updateTodo/"+ id, data).toPromise()) as APIResponse;
      if (res.status === "success") {
        return res.result;
      }
      throw new Error(res.code);
    } catch (err) {
      console.log("ERROR", err);
    }
  }

  async deleteTodo(id: any) {
    try {
      let res = (await this.http.post(environment.API + "/deleteTodo/", { id: id }).toPromise()) as APIResponse;
      if (res.status === "success") {
        return res.result;
      }
      throw new Error(res.code);
    } catch (err) {
      console.log("ERROR", err);
    }
  }
}
