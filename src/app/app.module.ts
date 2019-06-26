import { NgModule } from "@angular/core";
import { MatSortModule, MatTableModule } from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { PapaParseModule } from "ngx-papaparse";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { CsvUploadComponent } from "./components/csv-upload/csv-upload.component";

import { CsvTableComponent } from "./components/csv-table/csv-table.component";
import { IssuesOverviewComponent } from "./containers/issues-overview/issues-overview.component";

@NgModule({
	declarations: [
		AppComponent,
		CsvUploadComponent,
		IssuesOverviewComponent,
		CsvTableComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		PapaParseModule,
		MatTableModule,
		BrowserAnimationsModule,
		MatSortModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
