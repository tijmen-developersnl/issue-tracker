import { Component } from "@angular/core";

@Component({
	selector: "it-issues-overview",
	templateUrl: "./issues-overview.component.html",
	styleUrls: ["./issues-overview.component.scss"]
})
export class IssuesOverviewComponent {
	public title = "Issue overview";
	public tableHeader: object;
	public tableBody: object;

	public splitCsvObject($event) {
		if ($event) {
			this.tableHeader = $event.data.splice(0, 1);
			this.tableBody = $event.data.splice(0, $event.data.length);
		}
	}
}
