import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'testing';
  operator:string = "";
  sum:string = "";
  total:number;
  operandLeft:number;
  operandRight:string = "";
  countOperator:number = 0;
  arr:string[];
  constructor() {
    this.arr = ["1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10"  , "11", "12",  "*" , "+" , "-" , "/", "=" , "clear"];
  }
  check(num:string):void {
    if(num == "+" || num == "-" || num == "*" || num == "/") {
      this.countOperator++;
      if(this.countOperator > 1) {
        this.clear();
        this.countOperator = 0;
        this.add(num);
        return;
      }
      else {
        this.operator = num;
        this.operandLeft = Number(this.sum);
        alert("Operand left is "+this.operandLeft);
      }
      this.add(num);
      return;
    }
    else if(num == "clear") {
      this.clear();
      this.countOperator = 0;
      return;
    }
    else if(this.countOperator == 1 && num != "=" && num != "+" && num != "-" && num != "*") {
      this.operandRight += ""+num;
      this.add(num);
    }
    else if(this.countOperator == 1 && num == "=") {
      this.total = eval(`${String(this.operandLeft)} ${this.operator} ${this.operandRight}`);
      alert("operand right equals "+this.operandRight);
      alert(this.operandLeft+this.operator+this.operandRight +"="+this.total);
      this.clear();
      return;
    }
    else {
      this.add(num);
    }
  }
  add(num:string):void {
    this.sum += num;
  }
  clear():void {
    this.sum = "";
    this.countOperator = 0;
    this.operandRight = "";
  }
}
