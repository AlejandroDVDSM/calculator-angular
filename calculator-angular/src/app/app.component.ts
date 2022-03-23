import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator in Angular';
  operation: string = "";

  buildOperation(value: string): void {
    switch(value) {
      case 'Clear':
        this.operation = "";
        break;
      
      case 'Delete':
        this.operation = this.operation.slice(0, -1);
        break;

        default:
        this.operation += value;
    }
  }

  solve(): void {
    try {
      this.operation = eval(this.operation);
    } catch (exception) {
      this.operation = "SyntaxError ...";
      setTimeout(() => {this.operation = ""}, 2000);
    }
  }
}
