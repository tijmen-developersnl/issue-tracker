import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { PapaParseModule } from "ngx-papaparse";
import { CsvUploadComponent } from "./components/csv-upload/csv-upload.component";

@NgModule({
	declarations: [AppComponent, CsvUploadComponent],
	imports: [BrowserModule, AppRoutingModule, PapaParseModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
