import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  searchName!: string;
  @Output() searchOutput = new EventEmitter<any>()

  search(){
    this.searchOutput.emit(this.searchName);
    this.searchName = "";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
