import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/authService.service';
 

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  constructor(private auth:AuthService ) {
   
  }
  ngOnInit(): void {
    let us = this.auth.getLoggedUser();
    console.log("TabsPage-ngOnInit-ngOnInit",us)
    if(us)
    {
      
      this.auth.userChange.emit(us);
    }
 

  }

}
