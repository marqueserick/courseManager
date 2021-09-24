import { Injectable } from "@angular/core";
import { Course } from "./course";

@Injectable({
    providedIn: 'root'
})
export class CourseService{
    retrieveAll(): Course[]{
        return COURSES;
    }

    retrieveByID(id:number):Course{
       var course = COURSES.find((courseiterator:Course) => courseiterator.id ===id);
       if(course !== undefined){
           return course;
       }else{
           return {
               id: 0,
               name:'null',
               imageUrl:'null',
               price: 0,
               cod:'null',
               duration:0,
               rating:0,
               releaseDate:'null',
               description:'null'
           }
       } 
    }

    save(course: Course):void{
        if(course.id){
            const index = COURSES.findIndex((courseiterator:Course) => courseiterator.id === course.id);
            COURSES[index] = course;
        }

    }
}

    var COURSES:Course[] = [
        {
            id:1,
            name:'Angular',
            imageUrl:'assets/images/forms.png',
            price:99.9,
            cod:'CA-1',
            duration:6,
            rating:4.5,
            releaseDate:'December 2020',
            description:'Curso de Introdução ao Angular'
        },
        {
            id:2,
            name:'HTML & CSS',
            imageUrl:'assets/images/http.png',
            price:45.9,
            cod:'HC-2',
            duration:3,
            rating:4,
            releaseDate:'January 2021',
            description:'Curso Completo HTML & CSS'

        },
        {
            id:3,
            name:'Java & SpringBoot',
            imageUrl:'assets/images/cli.png',
            price:99.9,
            cod:'JSB-3',
            duration:6,
            rating:5,
            releaseDate:'November 2020',
            description:'Curso de Introdução ao SpringBoot'

        },
        {
            id:4,
            name:'Angular CLI',
            imageUrl:'assets/images/router.png',
            price:139.9,
            cod:'ACLI-4',
            duration:6,
            rating:4.3,
            releaseDate:'November 2020',
            description:'Curso de Angular CLI'

        }
    ]

