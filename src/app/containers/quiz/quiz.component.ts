import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { answers, questions } from 'src/app/data/demo';
import { EngineService } from 'src/app/services/engine.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  isMobile: boolean = false;
  modalRef?: BsModalRef;
  timer: any = 0;
  displayTimer: any = 0;
  timerInterval: any;
  questions: any = []
  question: any
  isLastQuestion: boolean = false;
  answersMap: Map<number, any> = new Map<number, any>();
  selectedValues: any = [];
  result: number = 0;
  wishMessage: string = ''
  constructor(private modalService: BsModalService, private engine: EngineService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit() {
    this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    this.questions = questions
    this.question = this.questions[0];
  }

  updateTextValue(event: any) {
    this.selectedValues = event.target.value;
    event.target.value = '';
  }
  confirm() {
    this.modalRef?.hide();
    this.stratTimer();
  }
  stratTimer() {
    this.timer = 30;
    this.timerInterval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
        this.updateTimerDisplay()
      } else {
        this.stopTimer();
        if (this.question) {
          this.nextQuestion(this.question.no);
        }

      }
    }, 1000);

  }
  stopTimer() {
    clearInterval(this.timerInterval);
  }
  updateTimerDisplay() {
    const minutes = Math.floor(this.timer / 60);
    const seconds = this.timer % 60;

    this.displayTimer = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  nextQuestion(num: number) {
    this.answersMap.set(num, this.selectedValues);

    if (this.questions.length == this.question.no + 1) {
      this.isLastQuestion = true
    }
    this.question = this.questions[num];
    this.selectedValues = []
    this.stopTimer();
    this.stratTimer();
  }
  updateSelectedValues(value: string) {
    if (this.selectedValues.includes(value)) {
      this.selectedValues = this.selectedValues.filter((item: string) => item !== value);
    } else {
      this.selectedValues.push(value);
    }
  }
  updateradioValues(value: string) {
    this.selectedValues = [value];
  }
  submitTest() {
    this.result = this.calculateResult();
    if (this.result >= 70) {
      this.wishMessage = 'Congratulations !!'
    } else {
      this.wishMessage = 'Please try again later'
    }
  }
  calculateResult() {
    let correctAnswers = 0
    answers.forEach((ans: { questionNo: number; answer: any; }) => {
      if (JSON.stringify(ans.answer) === JSON.stringify(this.answersMap.get(ans.questionNo))) {
        correctAnswers++;
      }
    });
    return correctAnswers / this.questions.length * 100;
  }

}
