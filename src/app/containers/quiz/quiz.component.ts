import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { QuestionType } from 'src/app/enum/enum';
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
  constructor(private modalService: BsModalService, private engine: EngineService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit() {
    this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    this.questions = [
      { imageUrl: '../../../assets//favicon.ico', no: 1, name: 'Among the following, on which architectural pattern is AngularJS based?', type: QuestionType.multipleChoise, options: [{ key: 'Test1', value: 'A' }, { key: 'Test2', value: 'B' }, { key: 'Test3', value: 'C' }, { key: 'Test4', value: 'D' }] },
      { imageUrl: '../../../assets//que.png', no: 2, name: 'Among the following, on which architectural pattern is AngularJS based?', type: QuestionType.multipleChoise, options: [{ key: 'Test1', value: 'A' }, { key: 'Test2', value: 'B' }, { key: 'Test3', value: 'C' }, { key: 'Test4', value: 'D' }] },
      { no: 3, name: 'test1', type: QuestionType.snigleChoise, options: [{ key: 'Test1', value: 'A' }, { key: 'Test2', value: 'B' }, { key: 'Test3', value: 'C' }, { key: 'Test4', value: 'D' }], },
      { no: 4, name: 'test1', type: QuestionType.snigleChoise, options: [{ key: 'Test1', value: 'A' }, { key: 'Test2', value: 'B' }, { key: 'Test3', value: 'C' }, { key: 'Test4', value: 'D' }], },
      { no: 5, name: 'test1', type: QuestionType.text, options: [{ key: 'Test1', value: 'A' }, { key: 'Test2', value: 'B' }, { key: 'Test3', value: 'C' }, { key: 'Test4', value: 'D' }], },
      { no: 6, name: 'test1', type: QuestionType.text, options: [{ key: 'Test1', value: 'A' }, { key: 'Test2', value: 'B' }, { key: 'Test3', value: 'C' }, { key: 'Test4', value: 'D' }], }

    ]
    this.question = this.questions[0];
    // this.engine.setDemoQuestions(this.question)
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
    this.selectedValues = value;
  }
  submitTest() {
    console.log(this.answersMap)
  }
}
