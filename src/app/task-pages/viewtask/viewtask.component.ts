import { Component } from '@angular/core';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent {
  tasks=[{
    title:"make a note dfgfdgdfgfg fgfgfgffgfgfgfg",
    description:"asdfadsf",
    deadline:"sdfdas",
    dateAdded:"dasfdasf",
    priority:true,
    isCompleted:false
  },
  {
    title:"go to bank",
    description:"",
    dateAdded:"",
    deadline:"",
    priority:true,
    isCompleted:false
  },
  {
    title:"meeting with team",
    description:"",
    deadline:"",
    dateAdded:"",
    priority:true,
    isCompleted:false
  },
  {
    title:"complete a front end",
    description:"",
    dateAdded:"",
    deadline:"",
    priority:true,
    isCompleted:false
  },
]
//  notify(type: string,message: string){
//   (()=>{
//     let n = document.createElement("div");
//     let id = Math.random().toString(36).substr(2,10);
//     n.setAttribute("id",id);
//     n.classList.add("notification",type);
//     n.innerText = message;
//     document.getElementById("notification-area").appendChild(n);
//     setTimeout(()=>{
//       var notifications = document.getElementById("notification-area").getElementsByClassName("notification");
//       for(let i=0;i<notifications.length;i++){
//         if(notifications[i].getAttribute("id") == id){
//           notifications[i].remove();
//           break;
//         }
//       }
//     },5000);
//   })();
// }

// notifySuccess(){
//   this.notify("success","This is demo success notification message");
// }
//  notifyError(){
//   this.notify("error","This is demo error notification message");
// }
//  notifyInfo(){
//   this.notify("info","This is demo info notification message");
// }
}
