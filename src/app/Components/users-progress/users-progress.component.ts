import { Component, OnInit } from "@angular/core";
import { UserProgress } from "src/app/Models/user-progress";
import { TaskProgressService } from "src/app/Services/task-progress-service.service";
import { PopoverController } from "@ionic/angular";
import { UserTasksPage } from "../../Pages/user-tasks/user-tasks.page";
import { Task } from "src/app/Models/task";
import { ReportService } from "src/app/Services/report.service";
import { User } from "src/app/Models/user";
import { UsersService } from "src/app/Services/users.service";

@Component({
  selector: "app-users-progress",
  templateUrl: "./users-progress.component.html",
  styleUrls: ["./users-progress.component.scss"],
})
export class UsersProgressComponent implements OnInit {
  userProgress = new Array<UserProgress>();
  tasks: Task[] = new Array();
  users: User[] = new Array();
  constructor(
    private datasev: TaskProgressService,
    private repServ: ReportService,
    private usrServ: UsersService
  ) {
    this.datasev.getTasksGroupByUserId();
     this.userProgress = this.getUsersProgress();

    this.repServ.getTasks().subscribe((data) => {
      for (const t of data) {
        this.tasks.push(t);
      }
    });
    this.users = this.usrServ.usersList;

    // let result = this.tasks.reduce(function (r, a) {
    //   r[a.userid] = r[a.userid] || [];
    //   r[a.userid].push(a);
    //   return r;
    // }, Object.create(null));

    for (let usr of this.users) {
      let up: UserProgress = new UserProgress();

      up.userName = usr.userName;
      up.userId = usr.userId;
      up.totaltasks = this.getTotalUserTasks(usr.userId);

      //
      this.userProgress.push(up);
    }

    console.log("this.userProgress", this.userProgress);
    console.log("usrServ.usersList;", this.users);
    console.log(" this.userProgress;", this.userProgress);
  }

  ngOnInit() {
    // this.userProgress = this.datasev.userProgressAry;
    // console.log(this.datasev.userProgressAry);
  }
  getTotalUserTasks(id): Number {
    let x = 222;
    let xxx: Task[] = new Array();
    this.repServ.getTasks().subscribe((data) => {
      xxx = data;
 
      for(let e of this.tasks)
      {
        if(parseInt( e.userid)===parseInt(id) )
        x++
      }
    });

    return x;
  }
  getUsersProgress(): Array<UserProgress> {
    let avg: number = 0;
    let taskslist: Array<Array<Task>> = this.datasev.getTasksGroupByUserId();
    console.log("getUsersProgress Start", taskslist.length);
    let tempProgressAry = new Array<UserProgress>();
    let up: UserProgress;

    for (let i = 0; i < this.datasev.getTasksGroupByUserId().length; i++) {
      let total = 0;
      console.log("let tr of this.UsersTasks", taskslist[i]);
      // if (null != tr && undefined != tr && tr.length > 0) {
      let inproglist = taskslist[i].filter(
        (t) => this.parsPercentage(t.progress) < 100
      );
      up = new UserProgress();
      for (let ut of inproglist) {
        total = total + ut.progress;
      }
      up.userId = taskslist[i][0].userid;
      up.totaltasks = taskslist[i].length + 1;
      up.totalInCompeletd =
        taskslist[i].filter((t) => this.parsPercentage(t.progress) >= 100)
          .length + 1;
      up.totalInProgress =
        taskslist[i].filter((t) => this.parsPercentage(t.progress) < 100)
          .length + 1;
      up.avgProgress = total / up.totalInProgress;
      //}

      tempProgressAry.push(up);
    }
    return tempProgressAry;
  }
  parsPercentage(val): number {
    return parseFloat(val) > 1 ? parseFloat(val) * 0.01 : parseFloat(val);
  }
}
