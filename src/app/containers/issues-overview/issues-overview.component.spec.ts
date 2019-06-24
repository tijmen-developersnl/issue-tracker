/* tslint:disable:no-floating-promises */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PapaParseModule } from "ngx-papaparse";

import { CsvUploadComponent } from "../../components/csv-upload/csv-upload.component";
import { IssuesOverviewComponent } from "./issues-overview.component";

describe("IssuesOverviewComponent", () => {
	let component: IssuesOverviewComponent;
	let fixture: ComponentFixture<IssuesOverviewComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [IssuesOverviewComponent, CsvUploadComponent],
			imports: [PapaParseModule]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(IssuesOverviewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	// splitCsvObject($event)
	xit("should split csv data", () => {
		// TODO: Add test (issue #7)
		expect(true);
	});
});
