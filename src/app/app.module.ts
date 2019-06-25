import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { PapaParseModule } from "ngx-papaparse";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { CsvUploadComponent } from "./components/csv-upload/csv-upload.component";

import { IssuesOverviewComponent } from "./containers/issues-overview/issues-overview.component";

@NgModule({
	declarations: [AppComponent, CsvUploadComponent, IssuesOverviewComponent],
	imports: [BrowserModule, AppRoutingModule, PapaParseModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
