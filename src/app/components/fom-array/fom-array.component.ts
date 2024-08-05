import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-fom-array',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './fom-array.component.html',
  styleUrl: './fom-array.component.css'
})
export class FomArrayComponent {

form = new FormGroup({
  lessons: new FormArray([
    new FormControl("", Validators.required)
  ])
});

get lessons() {
  return this.form.controls["lessons"] as FormArray;
}

addLesson() {
  const lessonForm = new FormGroup({
    title: new FormControl('', Validators.required),
  });

  this.lessons.push(lessonForm);
}

deleteLesson(lessonIndex: number) {
  this.lessons.removeAt(lessonIndex);
}

onSubmit(){
  console.log(this.form.value);
}

}
