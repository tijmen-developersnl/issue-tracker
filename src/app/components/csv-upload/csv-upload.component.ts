import { Component, EventEmitter, Output } from "@angular/core";
import { Papa } from "ngx-papaparse";

@Component({
	selector: "it-csv-upload",
	templateUrl: "./csv-upload.component.html",
	styleUrls: ["./csv-upload.component.scss"]
})
export class CsvUploadComponent {
	@Output() public csvObjectOutput: EventEmitter<object> = new EventEmitter<
		object
	>();
	public error;
	public allowedExtensions = ["csv"];
	private csvFile: any;

	constructor(private papa: Papa) {}

	public fileChanged(event) {
		this.error = null; // Reset error
		this.csvFile = event.target.files[0]; // Get uploaded file

		if (this.fileExtentionAllowed(this.csvFile)) {
			this.parseFile(this.csvFile);
		} else {
			this.error =
				"This file format is not allowed. Please upload an valid .scv file.";
		}
	}

	public parseFile(file) {
		this.papa.parse(file, {
			complete: results => {
				console.log(results);
				this.csvObjectOutput.emit(results);
			}
		});
	}

	public fileExtentionAllowed(file: File): boolean {
		const fileExtension = file.name
			.split(".")
			.pop()
			.toLowerCase();

		return this.allowedExtensions.indexOf(fileExtension) > -1;
	}
}
