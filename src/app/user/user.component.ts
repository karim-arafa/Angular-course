import { Component} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

 userName : string = 'Ali';
 onInput() : void{
   console.log(this.userName);
 }
 onClick() : void{

  this.userName = '';

 }



}
