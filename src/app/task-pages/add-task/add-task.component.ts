
import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbDateStruct, NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
	// imports: [NgbDatepickerModule, FormsModule, JsonPipe],
})
export class AddTaskComponent {
  closeResult: string | undefined;
  model: NgbDateStruct | undefined;
	// date: { year: number; month: number; } | undefined;

	// constructor(private calendar: NgbCalendar) {}
  constructor(private modalService: NgbModal) {}
	// selectToday() {
	// 	this.model = this.calendar.getToday();
  // }
  openVerticallyCentered(content: any) {
		this.modalService.open(content, { centered: true });
	}
}
