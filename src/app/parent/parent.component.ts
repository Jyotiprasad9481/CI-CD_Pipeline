import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentData :string = ""
  childData : string = ""

  childFunction(message : string){
    this.childData = message
  }
  onclick(){
    this.parentData = "Hi I am Parent Component"
  }
}
