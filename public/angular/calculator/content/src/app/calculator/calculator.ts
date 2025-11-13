import { Component, ChangeDetectorRef  } from '@angular/core';
import { NgClass } from '@angular/common';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-calculator',
  imports: [NgClass],
  templateUrl: './calculator.html',
  styleUrls: ['./calculator.css']
})
export class CalculatorComponent {
  constructor(private cdr: ChangeDetectorRef) {}

  /* CONSTS */
  ERRORS_SPEED = 60;

  /* VARS */
  addingParam = false;
  display: string = '0';
  expressionMemory: string = '';
  isError = false;
  justEvaluated = false;
  operators = ['+', '-', '/', '*'];

  addParam(param: string) {
    this.addingParam = true;
    this.expressionMemory = '';
    if(this.isError) {
      this.display = '0';
      this.isError = false;
    } else {
      if (this.display === '0') {
        if(this.operators.includes(param.trim())) {
          if(param.trim() === "-") {
            this.display = param;
          } else {
            return;
          }
        } else {
          this.display = param;
        }
      } else {
        if(this.operators.includes(param.trim())) {
          if(this.display.trim().slice(-1) === param.trim() || this.operators.includes(this.display.trim().slice(-1))) {
            return;
          } else {
            this.display += param;
          }
        } else {
          if(param.trim() === ".") {
            const displayInArray = this.display.split(/\s[+\-*/]\s/);
            if(displayInArray.slice(0, -1).length > 0) {
              if(!displayInArray[displayInArray.length-1].includes('.')) {
                this.display += param;
              }
            } else {
              if(!this.display.includes('.')) {
                this.display += param;
              }
            }
          } else {
            this.display += param;
          }
        }
      }
      this.isError = false;
    }
    setTimeout(() => {
      this.addingParam = false;
    }, 150);    
  }

  evalOperation(param: string = "") {
    if(param) {
      this.typeError("ERR: Not aviable currently!", this.ERRORS_SPEED);
      this.isError = true;
    } else {
      try {
        const result = evaluate(this.display.trim());
      
        if (result === Infinity || result === -Infinity || isNaN(result)) {
          throw new Error('Division by zero');
        }
      
        let displayResult = result.toString();
        if(result < 0) displayResult = '- ' + Math.abs(result);

        this.expressionMemory = this.display;
        this.display = displayResult;
        this.isError = false;
        this.justEvaluated = true;
      } catch (err: any) {
        if (err.message.includes('Division by zero')) {
          this.typeError("Error: Division by 0", this.ERRORS_SPEED);
        } else if (err.message.includes('Unexpected end of expression')) {
          this.typeError("Syntax error", this.ERRORS_SPEED);
        } else {
          this.typeError("Invalid operation", this.ERRORS_SPEED);
        }
      
        this.isError = true;
      }
      
    }
  }

  clearDisplay() {
    this.expressionMemory = '';
    this.display = '0';
    this.isError = false;
  }

  delete() {
    this.expressionMemory = '';
    if(!this.isError) {
      this.display = this.display.slice(0, -1);
      if(this.display == '') {
        this.display = '0';
      }
    } else {
      this.display = '0';
      this.isError = false;
    }
  }

  applyPercentage() {
    this.expressionMemory = '';
    try {
      const parts = this.display.trim().split(/\s([+\-*/])\s/); 
      if (parts.length === 1) {
        const num = parseFloat(parts[0]);
        if (!isNaN(num)) this.display = (num / 100).toString();
      } else if (parts.length === 3) {
        const a = parseFloat(parts[0]);
        const op = parts[1];
        const b = parseFloat(parts[2]);
        let result = 0;
  
        switch (op) {
          case '+':
            result = a + (a * b / 100);
            break;
          case '-':
            result = a - (a * b / 100);
            break;
          case '*':
            result = a * (b / 100);
            break;
          case '/':
            if (b === 0) throw new Error('Division by zero');
            result = a / (b / 100);
            break;
        }
  
        if(isNaN(result)) {
          this.typeError("The result is not numeric number", this.ERRORS_SPEED);
          this.isError = true;
        } else {
          this.display = result.toString();
          this.isError = false;
        }
      } else {
        throw new Error('Invalid operation');
      }
    } catch (err) {
      this.typeError("Operation error", this.ERRORS_SPEED);
      

      this.isError = true;
    }
  }
  



  async typeError(msg: string, speed: number = 75) {
    this.isError = true;
    this.display = "";
  
    for (const char of msg) {
      this.display += char;
      this.cdr.detectChanges(); // esto forzará la actualización de ngModel
      await new Promise(r => setTimeout(r, speed));
    }
  }
  
  
  
}