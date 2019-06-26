import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { MatSort } from "@angular/material/sort";

@Component({
	selector: "it-csv-table",
	templateUrl: "./csv-table.component.html",
	styleUrls: ["./csv-table.component.scss"]
})
export class CsvTableComponent implements OnInit {
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

	public ngOnInit() {
		this.data.sort = this.sort;
	}
}
