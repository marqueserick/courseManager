import { Component, OnInit } from "@angular/core";
import { ActivatedRoute} from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl:'./course.info.component.html'
})
export class CourseInfoComponent implements OnInit{
    courseId!: number
    course!: Course;

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService){

    }

    ngOnInit(): void {
        const route =  this.activatedRoute.snapshot.paramMap.get('id');
        if(route!==null){
            this.courseId = +route;
            this.course = this.courseService.retrieveByID(this.courseId);
        }
        
    }

    save(): void{
        this.courseService.save(this.course);
        
    }

}