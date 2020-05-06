import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  expression = '';

  btnPressed1(inValue) {
    this.expression = this.expression + inValue;
  }

  btnPressed2(inValue) {
    this.expression = this.expression + ' ' + inValue + ' ';
    console.log('--' + this.expression + '--');
  }

  btnDeletePressed() {
    let theLength = this.expression.length;
    if (this.expression.endsWith(' ')) {
      theLength = theLength - 3;
    } else {
      theLength = theLength - 1;
    }
    this.expression = this.expression.substring(0, theLength);
  }

  evaluate() {
    const theData = this.expression.split(' ');

    let theOperator: string;
    let theLeft: number;
    let theTotal = 0.0;
    for (const theValue of theData) {
      if (!isNaN(+theValue)) {
        if (theLeft === undefined){
          theLeft = +theValue;
        } else {
          switch (theOperator) {
            case '/':
              theTotal = theLeft / +theValue;
              break;
            case '*':
              theTotal = theLeft * +theValue;
              break;
            case '-':
              theTotal = theLeft - +theValue;
              break;
            case '+':
              theTotal = theLeft + +theValue;
              break;
          }
          theLeft = theTotal;
        }
      } else {
        theOperator = theValue;
      }

    }
    this.expression = theTotal.toString();
  }
}
