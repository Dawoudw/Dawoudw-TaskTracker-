import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { TasksService } from "src/app/Services/tasks.service";

import { SubTask } from "src/app/Models/sub-task";
import { Router } from "@angular/router";
import { Task } from "src/app/Models/task";
import { User } from "src/app/Models/user";
import { AuthService } from "src/app/Services/authService.service";

@Component({
  selector: "app-create-subtask",
  templateUrl: "./create-subtask.page.html",
  styleUrls: ["./create-subtask.page.scss"],
})
export class CreateSubtaskPage implements OnInit , OnDestroy{
  form: FormGroup;
  subTask: SubTask = new SubTask();
  user: User;
  task: Task;
  constructor(
    private modalCtrl: ModalController,
    private tasksService: TasksService, // private formBuilder: FormBuilder
    private router: Router,
    private auth: AuthService
  ) {
    this.user = auth.getLoggedUser();

    if (!this.user) {    console.log(!this.user)
      router.ngOnDestroy()
    }
  }
  ngOnDestroy(): void {
  
  }
  ngOnInit() {
    console.log(`${this.task.id}`);
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required],
      }),
      description: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required],
      }),
      progress: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required],
      }),
      taskdate: new FormControl(null, {
        updateOn: "blur",
        validators: [Validators.required],
      }),
    });
  }

  onCancel() {
    this.modalCtrl.dismiss(null, "cancel");
  }

  onCreateTask() {
    if (this.form.valid && this.task) {
      console.log(
        "New-Task Page From FORM: ",
        this.form.value.title,
        this.form.value.description
      );
      this.tasksService
        .addTask(this.form.value.title, this.form.value.description)
        .subscribe();
      this.form.reset();
      this.modalCtrl.dismiss(null, "task created");
    } else {
      return;
    }

    // window.location.replace('tasktracker/mytasks')
  }

  async createSubTask() {
    if (this.form.valid && this.task) {
      this.subTask.taskid = this.task.id;
      this.subTask.taskdate = this.form.value.taskdate;
      this.subTask.details = this.form.value.description;
      this.subTask.subtask = this.form.value.title;
      this.subTask.progress = this.form.value.progress;
      console.log(this.subTask);
      if (this.form.value.title) {
        await this.tasksService
          .addSubTask(this.subTask.id, this.subTask)
          .then((result) => {
            console.log("createSubTask() result ", result);
          })
          .catch((er) => {
            console.log(er);
          })
          .finally(() => {
            this.form.reset();
            this.modalCtrl.dismiss(null, "task created");
          });
      }
    } else {
      console.log("There were undefined fields when creating a subtask");
    }
  }
}
