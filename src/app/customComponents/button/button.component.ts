import { Component, Input,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements OnChanges{
  // ngOnChanges(changes: SimpleChanges): void {
  //   throw new Error('Method not implemented.');
  // }


  @Input() title: string = '';
  @Input() click: Function | undefined;


  handleClick() {
    if (this.click) {
      this.click();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
     console.log(" Change detected "+ changes);
  }
}
