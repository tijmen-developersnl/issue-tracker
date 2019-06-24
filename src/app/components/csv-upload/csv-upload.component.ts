import { Component, EventEmitter, Output } from "@angular/core";
import { Papa } from "ngx-papaparse";

@Component({
	selector: "it-csv-upload",
	templateUrl: "./csv-upload.component.html",
	styleUrls: ["./csv-upload.component.scss"]
})
export class CsvUploadComponent {
	constructor(private papa: Papa) {}
	@Output() public csvObjectOutput: EventEmitter<object> = new EventEmitter<
		object
	>();

	private allowedExtensions = ["csv"];
	private csvFile: any;

	// checks if word exists in array
	public static isInArray(array, word) {
		return array.indexOf(word.toLowerCase()) > -1;
	}

	public fileChanged(e) {
		this.csvFile = e.target.files[0];
		const fileExtension = this.csvFile.name.split(".").pop();

		if (CsvUploadComponent.isInArray(this.allowedExtensions, fileExtension)) {
			this.uploadDocument();
			this.parseFile(this.csvFile);
		} else {
			// TODO: wrong filetype error (issue #4)
		}
	}

	public uploadDocument() {
		const fileReader = new FileReader();
		fileReader.readAsText(this.csvFile);
	}

	public parseFile(file) {
		this.papa.parse(file, {
			complete: results => {
				this.csvObjectOutput.emit(results);
			}
		});
	}
}
