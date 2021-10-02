import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StarModule } from "../shared/component/star/star.module";
import { CourseInfoComponent } from "./course.info.component";
import { CourseListComponent } from "./course.list.component";
import { ReplaceModule } from "../shared/pipe/replace/replace.module";

@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,
    ],
    imports: [
        ReplaceModule,
        StarModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent
            },
            {
                path: 'courses/info/:id', component: CourseInfoComponent
            }
        ])
    ]
})

export class CourseModule {

}