import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { TasksService } from 'src/app/Services/tasks.service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
 
import { Router } from '@angular/router';
import { fromEvent, Subscription } from "rxjs";   
@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent implements OnInit , OnDestroy  {

  form: FormGroup;
  private backbuttonSubscription: Subscription;
  constructor(
    private modalCtrl: ModalController,
    private tasksService: TasksService,
    private router:Router,  private navCtrl: NavController
    // private formBuilder: FormBuilder
  ) { }

 // @HostListener('click')
  ngOnDestroy(): void {
    this.router.navigate(['tasktracker/mytasks'])
   // this.backbuttonSubscription.unsubscribe();
  }

  ngOnInit() {
    // const event = fromEvent(document, 'backbutton');
    // this.backbuttonSubscription = event.subscribe(async () => {
    //     const modal = await this.modalCtrl.getTop();
    //     if (modal) {
    //         modal.dismiss();
    //     }
    // });
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }

  async onCancel(){
    //await this.navCtrl.back() ;
  //  await this.modalCtrl.dismiss(null, 'cancel').then(()=>{ this.router.navigate(['tasktracker/mytasks'])});
  }

  onCreateTask(){
    console.log("New-Task Page From FORM: ", this.form.value.title, this.form.value.description);
    // this.tasksService.addTask(this.form.value.title, this.form.value.description).subscribe();
    this.form.reset();
    // this.modalCtrl.dismiss(null, 'task created');
  }
}
 