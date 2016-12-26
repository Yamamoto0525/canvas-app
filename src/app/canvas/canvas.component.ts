import {Component, ViewChild, OnInit, AfterViewInit} from '@angular/core';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';
import {DrawlineService} from './drawline.service.ts';

@Component({
  selector: 'app-canvas',
  templateUrl: 'canvas.component.html',
  styleUrls: ['canvas.component.css'],
  providers: [DrawlineService]
})
export class CanvasComponent implements OnInit, AfterViewInit {
  @ViewChild('myCanvas') myCanvas;
  public canvas: HTMLCanvasElement = null;
  public ctx: CanvasRenderingContext2D = null;
  public baseLines: FirebaseObjectObservable<any>;
  public Lines: {x: number, y: number, rx: number, ry: number}[];

  constructor(private drawlineService: DrawlineService,
              private af: AngularFire) {
  }

  ngOnInit() {
    this.baseLines = this.af.database.object('/lines', {preserveSnapshot: true});
  }

  ngAfterViewInit() {
    let canvas = this.myCanvas.nativeElement;
    this.ctx = canvas.getContext("2d");
    this.baseLines.subscribe(snapshot => {
      this.Lines = snapshot.val();
      this.drawlineService.drawLine(this.Lines, this.ctx);
    })
  }

  // 線を描く
  drawLine(): void {
    this.drawlineService.drawLine(this.Lines, this.ctx);
    this.drawlineService.addLine(this.Lines);
    this.baseLines.set(this.Lines);
  };

  // 線を削除し、データを初期化する
  removeLine(): void {
    this.drawlineService.removeLine(this.ctx);
    this.Lines = [{x: 0, y: 150, rx: 300, ry: 150}];
    this.baseLines.set(this.Lines);
  }
}
