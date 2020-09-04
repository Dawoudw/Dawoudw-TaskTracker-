import { Component, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";
import { ReportService } from "../../Services/report.service";
import { Task } from "../../Models/task";
import { UserInfo } from "src/app/Models/user-info";

declare var google;

@Component({
  selector: "app-report-task-period",
  templateUrl: "./report-task-period.page.html",
  styleUrls: ["./report-task-period.page.scss"],
})
export class ReportTaskPeriodPage implements OnInit {
  //deafult is a working userId and date case, other dates/userId combo may not work due to differing format or lack of data
  tasks: Task[] = new Array(0);
  userArr: UserInfo[] = new Array(0);
  userId: string = "0";
  dateArr: string[] = new Array(0);
  taskDate1: string; //= "2020-08-17";
  taskDate2: string; //= "2020-08-19";
  taskDates: string[] = new Array(0);
  ngOnInit() {}
  constructor(public platform: Platform, public api: ReportService) {
    this.api.getUsers().subscribe((data) => {
      this.userArr = data;
    });

    this.api.getTasks().subscribe((data) => {
      let sortdata = data.sort((b) => Date.parse(b.taskdate)).slice();
      for(const t of data)
      {
        let duplicate = false;

        for(const d of this.dateArr)
        {
          if(d == t.taskdate)
          {
            duplicate=true;

            break;
          }
        }
        if(!duplicate)
        {
          this.dateArr.push(t.taskdate);
        }
      } 

      this.dateArr.sort();
    });

    this.platform.ready().then(() => {
      google.charts.load("current", { packages: ["corechart"] });
    });
  }

  //helps with async issue
  processData() {
    let start: boolean = false;

    for (const tDate of this.dateArr) {
      if (tDate == this.taskDate1) {
        start = true;
      }
      if (start == true) {
        this.taskDates.push(tDate);
      }
      if (tDate == this.taskDate2) {
        start = false;

        break;
      }
    }
    console.log("Date Range: ");
    for (const d of this.taskDates) {
      console.log(d);

      this.api.getTaskByDateAndId(this.userId, d).subscribe((data) => {
        for (const t of data) {
          console.log("Task in range: " + t.task);
          this.tasks.push(t);
        }
      });
    }

    setTimeout(() => this.DrawPieChart(), 750);
  }

  DrawPieChart() {
  //  console.log("Final tasks array: " + this.tasks);
    var data: any = new google.visualization.DataTable();
    let total: number = 0;

    data.addColumn("string", "Task");
    data.addColumn("number", "Progress");

    //for percent in format "#%" - parseFloat and divide by 100
    for (const t of this.tasks) {
      const val = this.parsPercentage(t.progress);
      data.addRows([[t.task, val / 100]]);
      total = total + val / 100;
    }
    if (total < 1) {
      data.addRows([["Pending", 1 - total]]);
    }

    var options = {
      title: "Associate Task Status",
      is3D: true,
      legend: { position: "labeled" },
    };

    var chart = new google.visualization.PieChart(
      document.getElementById("div_pie")
    );
    chart.draw(data, options);
  }

  parsPercentage(val): number {
    return Number(
      (parseFloat(val) > 1 ? parseFloat(val) : parseFloat(val) * 100).toFixed(0)
    );
  }
}
