import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { asyncValidator } from '../helper/helper';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.scss'],

})
export class QuizDetailsComponent {
  testForm: FormGroup;
  questionForm: FormGroup;

  questionOptions = ['10', '20', '30', '40', '50']
  selectedValue: string = '10';
  constructor(private fb: FormBuilder) {
    this.testForm = this.fb.group({
      testName: ['', asyncValidator, Validators.required],
      description: ['', asyncValidator, Validators.required],
    });
    this.questionForm = this.fb.group({
      no: ['', asyncValidator, Validators.required],
      questionName: ['', asyncValidator, Validators.required],
      questionType: ['radio', asyncValidator, Validators.required],
      options: this.fb.group({
        A: ['', asyncValidator, Validators.required],
        B: ['', asyncValidator, Validators.required],
        C: ['', asyncValidator, Validators.required],
        D: ['', asyncValidator, Validators.required],

      })

    });
  }
  save() {

  }
  selectValue(value: any) {
    this.selectedValue = value;
  }
  stringToDigitArray(input: string): string[] {
    if (!/^\d+$/.test(input)) {
      throw new Error('Invalid input. Please provide a valid positive integer in string format.');
    }
    const number = parseInt(input, 10);
    const resultArray = Array.from({ length: number }, (_, index) => (index + 1).toString());
    return resultArray;
  }
  saveQuestion(accordion: any, questionNo: string) {
    if (accordion) {
      accordion.toggle(questionNo);
      accordion.collapse('2')
    }
  }
}
