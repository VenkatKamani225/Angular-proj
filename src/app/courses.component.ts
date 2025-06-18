import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { HtmlParser } from '@angular/compiler';

@Component({
    selector: 'courses',
    template: `<h2>{{ title }}<h2>
    <ul>
        <li *ngFor = "let course of coures">{{ course }}</li>
    </ul>
    
    `

})

export class CoursesComponent {
     title = 'COURSES';
        coures;
     constructor(courseService:CoursesService){
         this.coures = courseService.getCourses();
     }
}

// Create a component and selector is what you will use it t call in Html
// template is basically your html for that selector Component
// export this class and add it in App.module.ts 
// create a service and call it in constructor as above shown for loose decoupling
// add this serice in providers:[] in AppComponent.module.ts
