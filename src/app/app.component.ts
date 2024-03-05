import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './customComponents/button/button.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FormsModule, ButtonComponent,NgFor,NgIf,NgClass]
})
export class AppComponent implements OnInit,OnDestroy {

    title:string = 'Angular Components';
    username:string = '';
    password:string = '';
    numbers:number[] = [];
    isGreen:boolean=false;

    onSubmit() {
      if(this.username!=="" &&  this.password!=="") {
        this.isGreen = !this.isGreen;
        alert("password : "+this.password +'\n'+ "username : "+this.username)
      }else {
        alert("requeired both fields");
      }
    }

    constructor() {
      console.log("This is constructor");
    }

    ngOnInit() {
      console.log("this is onInit");
    }

    ngOnDestroy() {
      console.log("this is destroy");
    }

}
