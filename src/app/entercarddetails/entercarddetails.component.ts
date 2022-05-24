import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-entercarddetails',
  templateUrl: './entercarddetails.component.html',
  styleUrls: ['./entercarddetails.component.scss']
})
export class EntercarddetailsComponent implements OnInit {
  @Output() card = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  cardDetails: any = {
    formName: ' cardDetailsform',
    payload:{
    CardNumber: '',
    ExpiryDate: '',
    CVC: '',
    }
    
  }
  submit(){
    this.card.emit(this.cardDetails)
    // console.log('value',this.object.emit(this.choosesize))
}

}
