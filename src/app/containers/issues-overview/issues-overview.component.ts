import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSort, MatTableDataSource } from "@angular/material";

@Component({
	selector: "it-issues-overview",
	templateUrl: "./issues-overview.component.html",
	styleUrls: ["./issues-overview.component.scss"]
})
export class IssuesOverviewComponent implements OnInit {
	public title = "Issue overview";
	public tableHeader: string[];
	public tableBody = [];

	public displayedColumns: string[] = [
		"firstName",
		"surName",
		"issueCount",
		"dateOfBirth"
	];
	public data = new MatTableDataSource([
		{
			firstName: "Theo",
			surName: "Jansen",
			issueCount: "5",
			dateOfBirth: "1978-01-02T00:00:00"
		},
		{
			firstName: "Fiona",
			surName: "de Vries",
			issueCount: "7",
			dateOfBirth: "1950-11-12T00:00:00"
		},
		{
			firstName: "Petra",
			surName: "Boersma",
			issueCount: "1",
			dateOfBirth: "2001-04-20T00:00:00"
		}
	]);
	@ViewChild(MatSort, { static: true }) public sort: MatSort;

	public splitCsvObject($event) {
		if ($event) {
			// this.tableHeader = $event.data.splice(0, 1);
			// this.tableBody = $event.data.splice(0, $event.data.length);

			this.parseCsv($event);
		}
	}

	public ngOnInit() {
		this.data.sort = this.sort;
	}

	public parseCsv(csvData) {
		console.log(
			typeof csvData.data,
			csvData.data.length,
			typeof csvData.data.valueOf(),
			typeof csvData.data[0]
		);
		// csvData.toArray();

		//   this.tableHeader = csvData.data[0];
		//
		//   csvData.data.forEach(array => {
		//     const obj = {};
		//
		//     for (const arrayKey in array) {
		//       if (arrayKey) {
		//         obj[this.tableHeader[arrayKey]] = array[arrayKey];
		//       }
		//     }
		//     this.tableBody.push(obj);
		//   });
		//   console.log(typeof this.tableHeader, this.tableBody);
	}
}
