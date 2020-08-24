import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from "@angular/core";
import { UserProgress } from "src/app/Models/user-progress";
import { TaskProgressService } from "src/app/Services/task-progress-service.service";
import { Task } from "src/app/Models/task";
import { ReportService } from "src/app/Services/report.service";
import { User } from "src/app/Models/user";
import { UsersService } from "src/app/Services/users.service";
import { TasksService } from "src/app/Services/tasks.service";

@Component({
  selector: "app-today-tasks",
  templateUrl: "./today-tasks.component.html",
  styleUrls: ["./users-progress.component.scss"],
})
export class TodayTasksComponent implements OnInit, AfterViewInit {
  userProgress = new Array<any>();
  tasks: Task[] = new Array();
  users: User[] = new Array();
  @ViewChild("divMsg") divMsg: ElementRef;
  nodata: boolean = false;
  isLoaded: boolean = false;
  constructor(private repServ: ReportService, private usrServ: UsersService) {
    //Get All Users
    this.getUsersTodayTasks();
    this.nodata = false;
  }
  ngAfterViewInit(): void {}

  ngOnInit() {
    // this.doRefresh();
    //  this.isLoaded = true;
    //  this.getTotalUserTasks();
    // this.userProgress = this.getUsersTodayTasks();
  }

  ionViewWillEnter() {}

  getUsersTodayTasks() {
    //  if (!this.isLoaded) {
    this.repServ.getTasksToday().then((data) => {
      this.users = this.usrServ.usersList;
      this.tasks = data;
      let userProgAr = new Array<any>();
      console.log("ionViewWillEnter this.tasks", this.tasks);
      for (let t of this.tasks) {
        let obj: any = {
          id: t.id,
          task: t.task,
          taskdate: t.taskdate,
          userid: t.userid,
          userName: this.users.find((u) => u.userId + "" == t.userid).userName,
          progress: this.parsPercentage(t.progress),
        };
        console.log("   userProgAr.push(obj);", obj);
        userProgAr.push(obj);
      }
      console.log("getUsersTodayTasks", userProgAr);
      this.userProgress = userProgAr;
      this.userProgress.length < 1
        ? (this.divMsg.nativeElement.style.display = "block")
        : "none";
    });

    // }
  }

  parsPercentage(val): number {
    return parseFloat(val) > 1 ? parseFloat(val) : parseFloat(val) * 100;
  }

  async doRefresh(e) {
    console.log("UsersProgressComponent.doRefresh started");
    await new Promise(() => {
      this.isLoaded = true;
      setTimeout(() => {
        this.getUsersTodayTasks();
        e.target.complete();
        // this.ionViewWillEnter();
        this.isLoaded = false;
      }, 1000);
    }).catch((error) => error);
  }
}
