import { Component, ViewChild, ElementRef, OnInit, AfterContentInit } from '@angular/core';



@Component({
  selector: 'app-item-preview',
  template: `
      <canvas #canvas width="600" height="300" id="canvasSurface"></canvas>
  `,
  styles: [
    'canvas { border-style: solid }'
  ]
})
export class ItemPreviewComponent implements OnInit, AfterContentInit {

  protected ctx!: CanvasRenderingContext2D;

  constructor() {
     }

  ngOnInit(): void {
  }


  ngAfterContentInit(): void {
   
  }


  public doeet(str: string) {
    const canvas = document.getElementById('canvasSurface') as HTMLCanvasElement;
    const _ctx = canvas.getContext('2d');

    if ( _ctx != null) {
      _ctx.font = 'bold 128px serif';
      _ctx.fillStyle = 'blue';
      _ctx.fillText('Nash', 150, 150);
    }
  }
}
