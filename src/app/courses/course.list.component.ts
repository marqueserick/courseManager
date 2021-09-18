import { Component } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course.list.component.html'
})
export class CourseListComponent{
    courses: Course[] = [];

    ngOnInit(): void{

        this.courses = [
            {
                id:1,
                name:'Angular',
                imageUrl:'assets/images/forms.png',
                price:99.9,
                cod:'CA1',
                duration:6,
                rating:4.5,
                releaseDate:'December 2020'
            },
            {
                id:2,
                name:'HTML & CSS',
                imageUrl:'assets/images/http.png',
                price:45.9,
                cod:'HC2',
                duration:3,
                rating:4,
                releaseDate:'January 2021'

            },
            {
                id:3,
                name:'Java & SpringBoot',
                imageUrl:'assets/images/cli.png',
                price:99.9,
                cod:'JSB3',
                duration:6,
                rating:5,
                releaseDate:'November 2020'

            }
        ]
    }
}