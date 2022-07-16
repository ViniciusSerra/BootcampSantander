import { Component, OnInit } from "@angular/core";
import { Course } from "./Course";


@Component({
    selector: "app-course-list",
    templateUrl: "course-list.components.html"
})

export class courseListComponent implements OnInit{

    courses: Course [] = [];
    
    ngOnInit(): void{
        this.courses = [
            {
                id:1,
                name:"Angular: Form",
                imageUrl:'./assets/images/forms.png',
                price: 99.99,
                code:'XPS-8796',
                duration: 120,
                rating: 4.8,
                releasedate:'August, 2, 2022',
            },
            {
                id:2,
                name:"Angular: Http",
                imageUrl:'./assets/images/http.png',
                price: 69.99,
                code:'XPS-2796',
                duration: 80,
                rating: 4.5,
                releasedate:'September, 4,2022'
            }
        ]
    }
}