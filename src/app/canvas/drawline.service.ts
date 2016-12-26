import { Injectable } from '@angular/core';

@Injectable()
export class DrawlineService {

  constructor() { }

  // 線を描く
  drawLine(lines, ctx): void {
    let len = lines.length;

    for(let i=0;i<len;i++){
      ctx.beginPath();
      ctx.moveTo(lines[i].x,lines[i].y);
      ctx.lineTo(lines[i].rx,lines[i].ry);
      ctx.closePath();
      ctx.stroke();
    }
  };

  // 起点の位置により、次の配列の値を変化させつつ追加する
  addLine(lines): void{
    let el = lines[lines.length-1];
    // 左から上へ
    if(el.x>=0 && el.x<150 && el.y>0 && el.y<=150){
      lines.push({x:el.x+5,y:el.y-5,rx:el.rx-5, ry:el.ry+5 });
      // 上から右へ
    }else if(el.x>=150 && el.x<300 && el.y>=0 && el.y<150){
      lines.push({x:el.x+5,y:el.y+5,rx:el.rx-5, ry:el.ry-5 });
      // 右から下へ
    }else if(el.x>150 && el.x<=300 && el.y>=150 && el.y<300){
      lines.push({x:el.x-5,y:el.y+5,rx:el.rx+5, ry:el.ry-5 });
      // 下から左へ
    }else if(el.x>0 && el.x<=150 && el.y>150 && el.y<=300){
      lines.push({x:el.x-5,y:el.y-5,rx:el.rx+5, ry:el.ry+5 });
    }
  }

  // 線を削除し、データを初期化する
  removeLine(ctx): void {
    ctx.clearRect(0, 0, 300, 300);
  }
}
