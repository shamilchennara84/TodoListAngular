import { Component,Output,EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  text: string="" ;
  day: string="" ;
  reminder: boolean = false;
  showAddtask!:boolean;
  subscription!:Subscription

  @Output() onAddTask:EventEmitter<Task> = new EventEmitter()

constructor(private uiService:UiService){
    this.subscription = this.uiService.onToggle().subscribe((val)=>this.showAddtask= val)
}




  onSubmit() {
    if (!this.text.trim()) {
      alert('please add a task!');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder:this.reminder
    };

    this.onAddTask.emit(newTask)

    this.text = ""
    this.day = ""
    this.reminder = false
   
  }
}
