import { Component, OnInit, Input, Output, EventEmitter, OnChanges, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, OnDestroy, OnChanges{

	@Input() init:number;
	public counter:number = 0;
	private countTimerRef:any =  null;

	@Output() onDecrease = new EventEmitter<number>();
	@Output() onComplete = new EventEmitter<void>();

	ngOnDestroy():void{
		this.clearTimeout();
	}

	ngOnChanges():void{
		console.log("reiniciando contador con change")
		this.startCountDown()
	}

	ngOnInit(){
		this.startCountDown()
	}

	startCountDown(){
		if (this.init && this.init > 0) {
			this.clearTimeout()
			this.counter = this.init;
			this.doCountDown()
		}
	}

	doCountDown(){
		this.countTimerRef = setTimeout(()=>{
			this.counter = this.counter - 1;
			this.processCount()
		},1000)
	}

	clearTimeout(){
		if (this.countTimerRef) {
			clearTimeout(this.countTimerRef);
			this.countTimerRef = null;
		}
	}

	processCount(){
		// console.log("Ejecutando proceso de conteo")
		this.onDecrease.emit(this.counter)
		if (this.counter == 0) {
			console.log("Fin de el conteo")
			this.onComplete.emit()
		}else{ 
			console.log("conteo " + this.counter)
			this.doCountDown()
		}
	}

}
