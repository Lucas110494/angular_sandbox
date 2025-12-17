import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'template.component.html',
  imports: [CommonModule, NgTemplateOutlet]
})
export class TemplateComponent implements OnInit {
  isShow: boolean = false;

  greeting = 'hello world';

  userData = {
    id: 1,
    name: 'Lucas',
    username: 'Bear',
  }

  ngOnInit(): void {
    
  }
}
