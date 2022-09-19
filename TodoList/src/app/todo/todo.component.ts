import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { TodoService } from "src/app/shared/todo.service";


export interface PeriodicElement {
  name: string;
  _id: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {_id: 1, name: 'Hydrogen'},
  {_id: 2, name: 'Helium'},
  {_id: 3, name: 'Lithium'},
  {_id: 4, name: 'Beryllium'},
  {_id: 5, name: 'Boron'},
  {_id: 6, name: 'Carbon'},
];

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})


export class TodoComponent implements OnInit {
  formValue !: FormGroup;
  todoData: any [] = [];
  isEdit: boolean = false;
  id: string = "";
  constructor(
    private _formBuilder: FormBuilder,
    private _todos: TodoService
    ) { }

  ngOnInit(): void {
    this.formValue = this._formBuilder.group({
      name: ['']
    })
    this.getAllTodo();
  }

  async addTodo(){
    let res = await this._todos.addTodo(this.formValue.value);
    alert('Todo Added Succesfully');
    let ref = document.getElementById('close');
    ref?.click();
    this.formValue.reset();
    this.getAllTodo();
  }


  async getAllTodo(){
    let res = await this._todos.getAllTodo();
    this.todoData = res;
  }

  editTodo(row: any){
    this.id = row._id;
    this.formValue = this._formBuilder.group({
      name: row.name
    })
    this.isEdit = !false;
  }

  changeEdit(){
    this.formValue.reset();
    this.isEdit = false;
  }

  async updateTodo(){
    let id = this.id;
    let res = await this._todos.updateTodo(id, this.formValue.value);
    alert('Todo Updated Succesfully');
    let ref = document.getElementById('close');
    ref?.click();
    this.formValue.reset();
    this.getAllTodo();
  }

  async deleteTodo(id: any){
    let res = await this._todos.deleteTodo(id);
    alert('Todo Deleted Succesfully');
    this.getAllTodo();
  }

}
