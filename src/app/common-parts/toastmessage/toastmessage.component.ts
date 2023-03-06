import { Component } from '@angular/core';

@Component({
  selector: 'app-toastmessage',
  templateUrl: './toastmessage.component.html',
  styleUrls: ['./toastmessage.component.css']
})
export class ToastmessageComponent {
  enable=false
  message=""
  set(){
    this.enable=true
    this.message=""
    setTimeout(()=>{
      this.enable=false
      this.message=""
    },5000)
  }
}
