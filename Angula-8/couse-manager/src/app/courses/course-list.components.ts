import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: "app-course-list",
    templateUrl: "course-list.components.html"
})

export class courseListComponent implements OnInit{

    courses: Course[] = [];
    
    ngOnInit(): void{
        this.courses = [
            {
                id:1,
                name:"Angular",
                imageUrl:'',
                price: 99.99,
                code:'XPS-8796',
                duration: 120,
                rating: 4.8,
                releasedate:'August, 2, 2022',
            },
            {
                id:1,
                name:"Angular: http",
                imageUrl:'',
                price: 69.99,
                code:'XPS-2796',
                duration: 80,
                rating: 4.5,
                releasedate:'September, 4,2022'
            }
        ]
    }
}