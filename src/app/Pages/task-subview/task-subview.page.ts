import { Component, OnInit, OnDestroy } from "@angular/core";
import { Task } from "../../Models/task";
import { ActivatedRoute } from "@angular/router";
import { NavController, AlertController } from "@ionic/angular";
import { TasksService } from "src/app/Services/tasks.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-task-subview",
  templateUrl: "./task-subview.page.html",
  styleUrls: ["./task-subview.page.scss"],
})
export class TaskSubviewPage implements OnInit {
  loadedTask = Object.create(Task); // Variable need to be initialized!!!
  taskSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private tasksService: TasksService,
    private alCtr: AlertController,
    public navCtr:NavController,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("taskid")) {
        this.navCtrl.navigateBack("/tasktracker/teamprogress");
        return;
      }

      this.taskSub = this.tasksService
        .getTask(paramMap.get("taskid"))
        .subscribe((task) => {
          console.log("Subscripting: ", task);
          this.loadedTask = task;
          this.loadedTask.progress=this.parsPercentage(task.progress);
          console.log("This.loadedTask.id = ", this.loadedTask.id);
        });
    });
  }

  updateTask() {
    console.log("The task is going to be updated with data: ", this.loadedTask);
    this.tasksService.updateTask(this.loadedTask).subscribe();
  }
  back() {
    this.navCtrl.back();
  }
  parsPercentage(val): number {
    // let progress = (parseFloat(val) > 1
    //   ? parseFloat(val)
    //   : parseFloat(val) * 100
    // ).toFixed(0);

    return Number(
      (parseFloat(val) > 1 ? parseFloat(val) : parseFloat(val) * 100).toFixed(0)
    );
  }

  onViewWillEnter() {
    this.tasksService.fetchMyTasks(this.tasksService.loginedUser.userId);
  }

  onViewWillLeave() {
    this.tasksService.updateTask(this.loadedTask);
  }

  ngOnDestroy() {
    if (this.taskSub) {
      this.taskSub.unsubscribe();
    }
  }
}
