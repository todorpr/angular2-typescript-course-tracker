import {Component, View} from 'angular2/core';
import {CourseDetailsService} from '../services/course';
import {NgFor, NgIf} from 'angular2/common';

@Component({
	selector: "dashboard",
	providers: [CourseDetailsService],
	directives: [NgFor, NgIf],
	template: `		
		<div class="row">
			<div class="col-md-12" *ngIf="courses.length === 0" style="text-align: center">
				<h3>Loading . . . Please wait!</h3>
			</div>
			<div class="col-md-4" *ngFor="#course of courses">
				<div style="box-shadow: 10px 10px 5px #888888;width: 300px; height: 150px;background-color: #ebffc6;padding: 20px;margin: 15px;">
					{{course.title}}
					<hr />
					{{course.price}}
				</div>
			</div>
		</div>`
})


export class Dashboard{	
	courses: Array<Object> = [];

	constructor(service: CourseDetailsService) {
		service.load().subscribe(courseDetails => {
			this.courses.push(courseDetails)
		})
	}
}