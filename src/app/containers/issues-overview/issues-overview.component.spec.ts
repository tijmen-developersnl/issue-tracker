/* tslint:disable:no-floating-promises */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { IssuesOverviewComponent } from "./issues-overview.component";

describe("IssuesOverviewComponent", () => {
	let component: IssuesOverviewComponent;
	let fixture: ComponentFixture<IssuesOverviewComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [IssuesOverviewComponent]
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
});
