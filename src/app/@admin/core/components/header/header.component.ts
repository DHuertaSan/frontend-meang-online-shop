import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  toggleValue = true;
  @Output() toggledChangue = new EventEmitter<boolean>();
  

  toggled(){
    if(this.toggleValue === undefined){
      this.toggleValue = true;
    }
    this.toggleValue =!this.toggleValue;
    console.log(this.toggleValue);
    this.toggledChangue.emit(this.toggleValue);

  }

}
