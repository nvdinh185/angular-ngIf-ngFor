import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct',
  templateUrl: './struct.component.html',
  styleUrls: ['./struct.component.css']
})
export class StructComponent implements OnInit {
  condition: boolean = false;
  arrSubjects = ['Angular', 'NodeJS', 'React'];
  constructor() { }

  ngOnInit() {
  }

}
