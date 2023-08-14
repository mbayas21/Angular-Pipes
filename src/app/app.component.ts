import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string = "";
  date: string = "";
  amount: string = "";
  miles: string = "";

  onNameChange = (event: Event) => {
    this.name = (event.target as HTMLInputElement).value;
  }

  onDateChange = (event: Event) => {
    this.date = (event.target as HTMLInputElement).value;
  }

  onAmountChange = (event: Event) => {
    this.amount = (event.target as HTMLInputElement).value;
    parseFloat(this.amount).toFixed(2);
  }

  onMilesChange = (event: Event) => {
    this.miles = (event.target as HTMLInputElement).value;
    parseFloat(this.miles).toFixed(2);
   }
}
