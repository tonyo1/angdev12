import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ItemPreviewComponent } from '../item-preview/item-preview.component';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit, AfterViewInit {
  
  @ViewChild(ItemPreviewComponent, { static: false })
  private itmprev: ItemPreviewComponent = new ItemPreviewComponent;
  ngAfterViewInit() {
     
  } 





  constructor() {   }

  ngOnInit(): void {
    this.itmprev.doeet('f');
    console.log('yo')
  }

}
