import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  ngOnInit(): void {
    console.log("loaded");
    let savedTodos = localStorage.getItem('todos');

    this.todos = savedTodos ? JSON.parse(savedTodos):[];
  }

  newTodo :string ='';
  newDate :Date= new Date();

  todos : Todo[] =[];

 addTodo(){
  if(this.newTodo.trim().length && this.newDate){
    let todo: Todo ={
      id:Date.now(),
      title:this.newTodo,
      date:this.newDate
    }

    this.todos.push(todo);

    this.newTodo="";
    this.newDate=new Date();
  }

  localStorage.setItem("todos",JSON.stringify(this.todos));
 }

 deleteTodo(index: number){
  this.todos.splice(index,1);

  localStorage.setItem("todos",JSON.stringify(this.todos));

 }
}
