import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title: string = 'To do List';
  showAddTask!:boolean;
  subscripion!:Subscription

  constructor(private uiService:UiService, private router:Router){
    this.subscripion = this.uiService.onToggle().subscribe((val)=>this.showAddTask = val)
  }

  toggleAddTask() {
    
    this.uiService.toggleAddTask()
  }

  hasRouter(router:string){
    return this.router.url === router
  }
}
