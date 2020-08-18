import { Component } from "@angular/core";
import { UserProgress } from "src/app/Models/user-progress";
import { Task } from "src/app/Models/task";
import { User } from "src/app/Models/user";
import { TaskProgressService } from "src/app/Services/task-progress-service.service";
import { ReportService } from "src/app/Services/report.service";
import { UsersService } from "src/app/Services/users.service";
import { TasksService } from "src/app/Services/tasks.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  userProgress = new Array<UserProgress>();
  tasks: Task[] = new Array();
  users: User[] = new Array();
  constructor(
    private datasev: TaskProgressService,
    private repServ: ReportService,
    private usrServ: UsersService,
    private taskServ: TasksService
  ) {
    //this.datasev.getTasksGroupByUserId();
    //this.userProgress = this.getUsersProgress();

    this.repServ.getTasks().subscribe((data) => {
      for (const t of data) {
        this.tasks.push(t);
      }
    });
    this.users = this.usrServ.usersList;
    this.getTotalUserTasks()
    // let result = this.tasks.reduce(function (r, a) {
    //   r[a.userid] = r[a.userid] || [];
    //   r[a.userid].push(a);
    //   return r;
    // }, Object.create(null));
  }

  ngOnInit() {
    // this.userProgress = this.datasev.userProgressAry;
    // console.log(this.datasev.userProgressAry);
  }

  ionViewWillEnter() {
    //  console.log("this.ionViewWillEnter");
  }
  getTotalUserTasks() {
    let usertasks: Task[] = new Array();
    let num :number = 0;
    for (let usr of this.users) {
      let up: UserProgress = new UserProgress();

      var result = 0;
      for (var prop of usertasks) {
        // or Object.prototype.hasOwnProperty.call(obj, prop)
        result++;
      }

      this.taskServ.fetchMyTasks("" + usr.userId).subscribe((t) => {
        usertasks = t;
        num = t.length+1;
      });
      up.userName = usr.userName;
      up.userId = usr.userId;
      up.totaltasks = result;
      // this.tasks.filter(
      //   (x) => parseInt(x.userid) == parseInt(usr.userId)
      // ).length;
      // up.totaltasks = this.getTotalUserTasks(usr.userId);

      //
      this.userProgress.push(up);
    }

    console.log("this.userProgress", this.userProgress);
    console.log("usrServ.usersList;", this.users);
    console.log(" this.tasks;", this.tasks);
    console.log(" this.usertasks;", usertasks);
    //console.log(this.userProgress);
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
