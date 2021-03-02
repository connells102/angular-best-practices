import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { appRoutes } from './routes'
import { AppComponent }  from './app.component';
import { NavBarComponent }  from './core/nav-bar.component';
import { UserRepositoryService } from "./core/user-repository.service"
import { AccountMenuComponent } from "./core/account-menu.component";
import { CatalogModule } from './catalog/catalog.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    CatalogModule,
    SharedModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    AccountMenuComponent
  ],
  providers: [
    UserRepositoryService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
