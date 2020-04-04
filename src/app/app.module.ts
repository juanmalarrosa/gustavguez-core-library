import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ApiServiceComponent } from './api/api-service/api-service.component';
import { AppRoutingModule } from './app-routing.module';

import { NgxGustavguezCoreModule } from 'projects/ngx-gustavguez-core/src/public-api';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoaderComponent } from './structure/loader/loader.component';
import { CardComponent } from './structure/card/card.component';
import { InfoBoxComponent } from './structure/info-box/info-box.component';
import { PageHeaderComponent } from './structure/page-header/page-header.component';
import { PopupComponent } from './structure/popup/popup.component';
import { ToastsComponent } from './structure/toasts/toasts.component';

@NgModule({
	declarations: [
		AppComponent,
		ApiServiceComponent,
		DashboardComponent,
		LoaderComponent,
		CardComponent,
		InfoBoxComponent,
		PageHeaderComponent,
		PopupComponent,
		ToastsComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		RouterModule,
		NgxGustavguezCoreModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
