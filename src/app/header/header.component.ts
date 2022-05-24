import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   userRetrived: any;
  user: any;
  users: any[] = [];
  amount: number = 1;
  orderForm: any = {
    size: {},
    yourDetails: {},
    shippingDetails: {},
    cardDetails:{}
  };
  submit(data: any) {
    console.log('data', data);
    if(data.formName === "chooseSizeForm"){
      this.orderForm.size = data.payload;
    } 
    if(data.formName === "yourDetailsForm"){
      this.orderForm.yourDetails = data.payload;
    }
    if(data.formName === "shippingDetailsForm"){
      this.orderForm.shippingDetails = data.payload;
    }
    if(data.formName === "cardDetailsform"){
      this.orderForm.cardDetails = data.payload;
    }

    
    console.log('this.orderForm', this.orderForm);
  }
  // submit2(cardDetails: any){
  //   console.log(cardDetails)
  // }



  // submit(values: any) {
  //   if (values.invalid) {
  //     console.log(values.invalid)
  //     return;
  //   }
  // this.user = {
  //   // chooseSize: this.choosesize,
  //   YourDetails: this.Details,
  //   YourShippingDetails: this.ShippingDetails,
  //   EnterCardDetails: this.cardDetails
  // }



  constructor(private userService: ServiceService) { }
   Toarray(): void {
  //   this.users.push(this.user);
  //   console.log('Users array:', this.users)
     this.userService.users(this.orderForm)
   }
   retrivedData() {
    this.userService.getuser().subscribe((res: any) => {

       this.userRetrived = res['results'];
       console.log('hello',this.userRetrived)
     })
}


  ngOnInit(): void { this.retrivedData(); }
   

     
}
