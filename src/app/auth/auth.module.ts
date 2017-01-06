import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { authRouting } from './auth.routing';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { ResetpassComponent } from './resetpass.component';

@NgModule({
  imports:      [ 
    authRouting,
    FormsModule,
    CommonModule
   ],
  declarations: [ 
    SignupComponent,
    LoginComponent,
    ResetpassComponent
  ]
})
export class AuthModule { }
