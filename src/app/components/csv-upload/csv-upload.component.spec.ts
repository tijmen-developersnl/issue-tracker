/* tslint:disable:no-floating-promises */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PapaParseModule } from "ngx-papaparse";

import { CsvUploadComponent } from "./csv-upload.component";

describe("FileUploadComponent", () => {
	let component: CsvUploadComponent;
	let fixture: ComponentFixture<CsvUploadComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CsvUploadComponent],
			imports: [PapaParseModule]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CsvUploadComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	// fileChanged(event)
	xit("should upload file", () => {
		// TODO: Add test (issue #6)
	});

	// parseFile(file)
	xit("should emit event", () => {
		const file: File = new File(["first_name;sur_name;"], "succes.csv", {
			type: "text/csv"
		});
		spyOn(component.csvObjectOutput, "emit");
		component.parseFile(file);
		expect(component.csvObjectOutput.emit).toHaveBeenCalled();
	});

	// fileExtentionAllowed(file: File): Boolean;
	it("should allow file extension", () => {
		const file: File = new File([], "test.csv");
		component.allowedExtensions = ["csv", "pdf"];

		expect(component.fileExtentionAllowed(file)).toBe(true);
	});

	it("should not allow file extension", () => {
		const file: File = new File([], "test.txt");
		component.allowedExtensions = ["csv", "pdf"];

		expect(component.fileExtentionAllowed(file)).toBe(false);
	});
});
