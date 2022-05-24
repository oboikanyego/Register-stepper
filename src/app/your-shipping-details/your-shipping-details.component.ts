import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-your-shipping-details',
  templateUrl: './your-shipping-details.component.html',
  styleUrls: ['./your-shipping-details.component.scss']
})
export class YourShippingDetailsComponent implements OnInit {
  @Output() ship = new EventEmitter<any>();
  constructor() { }
  shippingDetails: any = {
    formName: 'shippingDetailsForm',
    payload: {
      HouseNumber: '',
      StreetAddress: '',
      Town: '',
      AreaCode: '',
    }
  }

  ngOnInit(): void {
  }
  
  submit() {

    this.ship.emit(this.shippingDetails)
    return;
  }
}
