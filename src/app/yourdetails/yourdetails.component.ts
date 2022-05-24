import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-yourdetails',
  templateUrl: './yourdetails.component.html',
  styleUrls: ['./yourdetails.component.scss']
})
export class YourdetailsComponent implements OnInit {
  @Output() detail = new EventEmitter<any>();
  yourDetails: any = {
    formName: 'yourDetailsForm',
    payload: {
      firstName: '',
      surname: '',
      phoneNumber: '',
      dateOfDelivery: '',
      timeOfArrival: '',
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    this.detail.emit(this.yourDetails)
  }
}
