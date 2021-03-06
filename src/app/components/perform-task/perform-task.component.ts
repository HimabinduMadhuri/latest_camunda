import { TaskService } from 'src/app/services/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peform-task',
  templateUrl: './perform-task.component.html',
  styleUrls: ['./perform-task.component.css']
})
export class PerformTaskComponent implements OnInit {
  allCaseInfo:any;
  keys:string[];
  task:any;

  constructor(public taskService:TaskService) { }

  ngOnInit() {
   
    this.task=history.state.task;
    this.getCaseInfo();
  }
  getCaseInfo(){
    this.taskService.getCaseInfo(this.task.processInstanceId).subscribe(
     (data) =>{
      this.keys = Object.keys(data);
      this.allCaseInfo = JSON.parse(JSON.stringify(data));
     } 
     );
   }

  

}
