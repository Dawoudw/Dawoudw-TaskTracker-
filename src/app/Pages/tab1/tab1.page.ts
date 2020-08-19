import { Component } from "@angular/core";
import { UserProgress } from "src/app/Models/user-progress";
import { Task } from "src/app/Models/task";
import { User } from "src/app/Models/user";
import { TaskProgressService } from "src/app/Services/task-progress-service.service";
import { ReportService } from "src/app/Services/report.service";
import { UsersService } from "src/app/Services/users.service";
import { TasksService } from "src/app/Services/tasks.service";
import { from, of } from "rxjs";
import { map, take } from "rxjs/operators";
import { AnyARecord } from "dns";
import { Key } from "protractor";
import { threadId } from 'worker_threads';

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
    //Get All Tasks
    // let result = this.tasks.reduce(function (r, a) {
    //   r[a.userid] = r[a.userid] || [];
    //   r[a.userid].push(a);
    //   return r;
    // }, Object.create(null));
    this.repServ.getTasks().subscribe((data) => {
      this.tasks = data;
    });
    //Get All Users
    this.users = this.usrServ.usersList;
  }

  ngOnInit() {
    // this.userProgress = this.datasev.userProgressAry;
    // console.log(this.datasev.userProgressAry);
  }
  ionViewDidEnter() {
    // console.log("ionViewDidEnter this.tasks", this.tasks);
    // //Group Tasks By User ID
    // let tasksGroupByUsr = this.tasks.reduce((r, a) => {
    //   r[a.userid] = r[a.userid] || [];
    //   r[a.userid].push(a);
    //   return r;
    // }, Object.create(null));
    // console.log("ionViewDidEnter tasksGroupByUsr", tasksGroupByUsr);
  }
  ionViewWillEnter() {
    console.log("ionViewWillEnter this.tasks", this.tasks);

    //Group Tasks By User ID
    let tasksGroupByUsr = new Array<Array<Task>>();
    tasksGroupByUsr = this.tasks.reduce((r, a) => {
      r[a.userid] = r[a.userid] || [];
      r[a.userid].push(a);
      return r;
    }, Object.create(null));

    let prom = new Promise((resolve) => {
      resolve(tasksGroupByUsr);
    }).then((res) => {
      console.log("Array<Array<Task>> ", res);

      return Array.of(res);
    });

    let T: Task = new Task();
    let TA: Task[] = new Array();
    let userId: any;
    let usrPorg: UserProgress = new UserProgress();
    let totalTasks = 0;
    let AvgProgress = 0;
    const iterate = (obj) => {
      Object.keys(obj).forEach((key) => {
        //   console.log(`key: ${key}, value: ${obj[key]}`);
        let currentid: any;
        if (typeof obj[key] === "object") {
          T = new Task();
          iterate(obj[key]);
          if (usrPorg.totaltasks > 0 && usrPorg.totalInProgress > 0)
            usrPorg.avgProgress = usrPorg.totalInProgress / usrPorg.totaltasks;

          if (currentid != userId) {
            this.userProgress.push(usrPorg)
            userId = currentid;
            usrPorg = new UserProgress();

            totalTasks = 0;
            AvgProgress = 0;

          }
          TA.push(T);
        } else {
          ++usrPorg.totaltasks;

          if (key === "userid") {
            T.userid = obj[key];
            currentid = obj[key];

            // TA.push(T);
          }
          if (key === "progress") {
            T.progress = obj[key];

            let pv: number = parseFloat(obj[key]);
            if (pv < 1) pv = pv * 100;
            if (pv < 100) ++usrPorg.totalInProgress;
            if (pv >= 100) ++usrPorg.totalInCompeletd;
            //  TA.push(T);
          }
          if (key === "id") {
            T.id = obj[key];
            // TA.push(T);
          }
          if (key === "task") {
            T.task = obj[key];
            // TA.push(T);
          }
          if (key === "taskdate") {
            T.taskdate = obj[key];
            // TA.push(T);
          }
          if (key === "details") {
            T.details = obj[key];
            //  TA.push(T);
          }
        }
      });
    };
    let ff = from(prom)
      .pipe(
        map((resData) => {
          const tasks = [];
          console.log("resData[0] ", resData[0]);

          let len = Array.of(resData[0]).length;
          console.log(" Array.of(resData[0] ).length ", len);
          let xxar = Array.of(resData[0]);
          console.log("xxar ", xxar);
          console.log("iterate(xxar)", iterate(xxar));
          console.log("iterate(xxar)this.userProgress", this.userProgress);
          console.log("iterate(TA)", TA);
          // for (let key in resData) {
          //   if (key.hasOwnProperty(key)) {
          //     console.log("resData[key] ", resData[key][0]);
          //     let xxar = Array.of(resData[key]);
          //     for(let y in xxar)
          //     {
          //       console.log("xxar ",y);
          //     }
          //   }
          // }
        

          //  for (let i of tasksGroupByUsr) {
          //   let up = new UserProgress();
          //   for (let x of i) {
          //     up.userId = x.userid;
          //     up.totaltasks = i.length + 1;
          //   }
          //   this.userProgress.push(up);
          // }
          // console.log(" this.userProgress",  this.userProgress);

          for (let cc in resData) {
            if (resData.hasOwnProperty(cc)) {
              console.log("resData[CC] ", cc);
              for (let c in resData[cc][1]) {
                console.log("resData[key][Key].C", c);
              }
            }
          }
          //tasks.push(
          //resData[0][0].task
          // new Task(
          //   resData[key].task,
          //   resData[key].id,
          //   resData[key].taskdate,
          //   resData[key].details,
          //   resData[key].userid,
          //   parseFloat(resData[key].progress+'') > 1
          //     ? parseFloat(resData[key].progress+'') * 0.01
          //     : parseFloat(resData[key].progress+'')
          // )
          //);
          //  }
          //   }
          return tasks.sort(
            (a, b) => Date.parse(b.taskdate) - Date.parse(a.taskdate)
          ); // order by date DESC
        })
      )
      .subscribe((date) => {
        console.log(
          "ionViewWillEnter tasksGroupByUsr Observable date",
          date[0]
        );
        for (let x in date[0]) {
          console.log("ionViewWillEnter tasksGroupByUsr Observable date[x]", x);
        }
        return date;
      });
    console.log("ionViewWillEnter tasksGroupByUsr Observable", ff);
    console.log("ionViewWillEnter tasksGroupByUsr Promise", prom);

    //  this.getUsersProgress();
    //  console.log("this.ionViewWillEnter");
  }
  getTotalUserTasks() {
    let usertasks: Task[] = new Array();
    let num: number = 0;
    for (let usr of this.users) {
      let up: UserProgress = new UserProgress();

      var result = 0;

      this.taskServ.fetchMyTasks("" + usr.userId).subscribe((t) => {
        usertasks = t;
        num = t.length + 1;
      });
      for (var prop of usertasks) {
        // or Object.prototype.hasOwnProperty.call(obj, prop)
        result++;
      }

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
    let taskslist: Array<Array<
      Task
    >> = this.datasev.getTasksGroupByUserId().slice();
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
