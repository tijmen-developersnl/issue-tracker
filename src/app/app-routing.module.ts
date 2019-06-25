import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IssuesOverviewComponent } from "./containers/issues-overview/issues-overview.component";

const routes: Routes = [{ path: "", component: IssuesOverviewComponent }];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
