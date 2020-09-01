import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  Input,
  Inject,
} from "@angular/core";

 

@Component({
  selector: "app-sub-task",
  templateUrl: "./sub-task.component.html",
  styleUrls: ["./sub-task.component.scss"],
})
export class SubTaskComponent implements OnInit {
  @ViewChild("expandWrapper", { read: ElementRef }) expandWrapper: ElementRef;
  @Input("expanded") expanded: boolean = false;
  @Input("expandHeight") expandHeight: string = "150px";
  @Input("SubTaskObj") SubTaskObj: any = new Object();

  constructor(public rendr: Renderer2) {
     
  }

  // ngAfterViewInit() {
  //   this.renderer.setStyle(
  //     this.expandWrapper.nativeElement,
  //     "max-height",
  //     this.expandHeight
  //   );
  // }

  ngOnInit() {}
}
