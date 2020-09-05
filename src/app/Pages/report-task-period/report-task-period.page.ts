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
export class ReportTaskPeriodPage {
  //deafult is a working userId and date case, other dates/userId combo may not work due to differing format or lack of data
  tasks: Task[];
  userArr: UserInfo[] = new Array(0);
  userId: string = "0";
  dateArr: string[] = new Array(0);
  taskDate1: string; //= "2020-08-17";
  taskDate2: string; //= "2020-08-19";
  taskDates: string[];

  constructor(public platform: Platform, public api: ReportService) 
  {
    this.api.getUsers().subscribe(data => { this.userArr = data });

    this.api.getTasks().subscribe(data => 
    { 
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
      google.charts.load('current', { 'packages':['corechart'] });
    })
  }

  //helps with async issue
  processData()
  {
    this.taskDates = new Array(0);
    this.tasks = new Array(0);

    let start: boolean = false;
    
    for(const tDate of this.dateArr)
    {
      if(tDate==this.taskDate1)
      {
        start=true;
      }
      if(start==true)
      {
        this.taskDates.push(tDate);
      }
      if(tDate==this.taskDate2)
      {
        start=false;
        
        break;
      }
    }
    for(const d of this.taskDates)
    {
      this.api.getTaskByDateAndId(this.userId, d).subscribe(data => 
        {
          for(const t of data)
          {
            this.tasks.push(t);
          }
          
        });
    }
  
    setTimeout(() => this.DrawPieChart(), 1500);
  }

  DrawPieChart()
  {
    var data: any = new google.visualization.DataTable();
    let total: number = 0;

    data.addColumn('string', 'Task');
    data.addColumn('number', 'Progress');

    //for percent in format "#%" - parseFloat and divide by 100
    for(const t of this.tasks)
    {
      data.addRows([[t.task, (this.parsPercentage(t.progress) / 100)]]);
      total = total + (this.parsPercentage(t.progress) / 100);
    }
    if(total<1)
    {
      data.addRows([["Pending", 1 - total]]);
    }

    var options = {
      title: 'Associate Task Status',
      is3D: true,
      legend: { position: 'labeled' }
    }

    var chart = new google.visualization.PieChart(document.getElementById('div_pie'));
    chart.draw(data, options);
  }

  parsPercentage(val): number {
    return Number(
      (parseFloat(val) > 1 ? parseFloat(val) : parseFloat(val) * 100).toFixed(0)
    );
  }
}
