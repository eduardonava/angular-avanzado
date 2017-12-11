import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	couterProgress:number = 0;
	totalCountDown:number = 15;

	updateProgress($event){
		this.couterProgress = (this.totalCountDown - $event) / this.totalCountDown * 100;
	}

	finishProgress($event){
		console.log("Fin de el progreso")
	}
}
