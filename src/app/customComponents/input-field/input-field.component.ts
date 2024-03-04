import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../../app.component';
@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [InputFieldComponent,FormsModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss'
})

export class InputFieldComponent {

  @Input() title:string = '';
  @Input() type: string = '';
  inputValue: string = '';
  @Output() valueChange = new EventEmitter<string>();
  
  onInput() {
    this.valueChange.emit(this.inputValue);
  }
}
