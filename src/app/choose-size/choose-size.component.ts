import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-choose-size',
  templateUrl: './choose-size.component.html',
  styleUrls: ['./choose-size.component.scss']
})
export class ChooseSizeComponent implements OnInit {
  @Output() object = new EventEmitter<any>();

  Brand: any[] = ['Omo', 'Sunlight', 'Ariel', 'Surf'];
  packageName: any[] = ['5Kg R40', '10Kg R100'];
  choosesize: any = {
    formName: 'chooseSizeForm',
    payload: {
      brand: '',
      size: '',
      amount: ''
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.object.emit(this.choosesize)
    // console.log('value',this.object.emit(this.choosesize))
  }
  Inc(){
    this.choosesize.payload.amount++;
  }
  Dec(){
    this.choosesize.payload.amount--;
  }

}
