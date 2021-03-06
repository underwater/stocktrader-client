/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
  NbAlertModule,
} from '@nebular/theme';
import { AuthService } from './services/auth.service';
import { SignUpViewModel } from './view-models/sign-up.view-model';
import { SignInViewModel } from './view-models/sign-in.view-model';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { FormControlStatusPipe } from './pipes/form-control-status.pipe';
import { ErrorHandlerService } from './services/error-handler.service';
import { AuthGuard } from './services/guards/auth.guard';
import { UnAuthenticatedGuard } from './services/guards/unauthenticated.guard';
import { AuthInterceptor } from './services/interceptors/auth.interceptor';
import { PricingService } from './services/pricing.service';
import { PricingViewModel } from './view-models/pricing.view-model';

@NgModule({
  declarations: [
      AppComponent,
      SignUpComponent,
      SignInComponent,
      FormControlStatusPipe
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ThemeModule.forRoot(),
    NbAlertModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
      AuthService,
      PricingService,
      SignUpViewModel,
      SignInViewModel,
      PricingViewModel,
      AuthGuard,
      UnAuthenticatedGuard,
      {provide: ErrorHandler, useClass: ErrorHandlerService},
      {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
      }
]
})
export class AppModule {
}
