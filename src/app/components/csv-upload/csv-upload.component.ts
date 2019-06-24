import { Component } from "@angular/core";
import { Papa } from "ngx-papaparse";

@Component({
	selector: "it-csv-upload",
	templateUrl: "./csv-upload.component.html",
	styleUrls: ["./csv-upload.component.scss"]
})
export class CsvUploadComponent {
	private allowedExtensions = ["csv"];
	private csvFile: any;

	public issuesHeader: string[];
	public issuesData: string[];

	constructor(private papa: Papa) {}

	public fileChanged(e) {
		this.resetTable();

		this.csvFile = e.target.files[0];
		const fileExtension = this.csvFile.name.split(".").pop();

		if (this.isInArray(this.allowedExtensions, fileExtension)) {
			this.uploadDocument();
			this.parseFile(this.csvFile);
		} else {
			// TODO: wrong filetype error
		}
	}

	public uploadDocument() {
		const fileReader = new FileReader();
		fileReader.readAsText(this.csvFile);
	}

	// checks if word exists in array
	public isInArray(array, word) {
		return array.indexOf(word.toLowerCase()) > -1;
	}

	// TODO: Move to new component + look into routing
	public parseFile(file) {
		this.papa.parse(file, {
			complete: results => {
				this.issuesHeader = results.data.splice(0, 1);
				this.issuesData = results.data.splice(1, results.data.length);
			}
		});
	}

	public resetTable() {
		this.issuesHeader = [];
		this.issuesData = [];
	}
}
