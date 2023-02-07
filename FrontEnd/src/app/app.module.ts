import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterButtonsComponent } from './state-management/counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './state-management/counter-output/counter-output.component';
import { MainComponent } from './state-management/main/main.component';
import { StoreModule } from '@ngrx/store';
import { AddCustomNumberComponent } from './state-management/add-custom-number/add-custom-number.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PostComponent } from './posts/post/post.component';
import { appReducer } from './app.state';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { Effect } from './posts/state/post.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { LoginComponent } from './posts/login/login.component';
import { CustomSerializer } from './posts/router/custom.serialized';
@NgModule({
  declarations: [
    AppComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    MainComponent,
    AddCustomNumberComponent,
    PostComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    FormsModule,
    EffectsModule.forRoot([Effect]),
    StoreDevtoolsModule.instrument({ logOnly: !isDevMode() }),
    HttpClientModule,
    StoreRouterConnectingModule.forRoot(
      {
        serializer : CustomSerializer
      }
    ),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
