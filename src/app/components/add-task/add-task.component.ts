import { Component,Output,EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  text: string="" ;
  day: string="" ;
  reminder: boolean = false;

  @Output() onAddTask:EventEmitter<Task> = new EventEmitter()

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
