import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Angular Flex-Layout
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
//Material Components
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon'


// forms modules for the ngModel
import { FormsModule } from '@angular/forms';
//routing
import { HttpClientModule } from '@angular/common/http';
import { ChooseSizeComponent } from './choose-size/choose-size.component';
import { YourdetailsComponent } from './yourdetails/yourdetails.component';
import { YourShippingDetailsComponent } from './your-shipping-details/your-shipping-details.component';
import { EntercarddetailsComponent } from './entercarddetails/entercarddetails.component';
//CDK layout flex
import {LayoutModule} from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChooseSizeComponent,
    YourdetailsComponent,
    YourShippingDetailsComponent,
    EntercarddetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    HttpClientModule,
    MatIconModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
