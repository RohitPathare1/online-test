import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EngineService {

  constructor() { }



  // setDemoQuestions(record: any) {
  //   this.store.collection('SetDemoQuestion').add(record).then(() => {
  //   }).catch((err: { message: any; }) => {
  //     console.log(err.message)
  //   })
  // }
  // async getDemoQuestion() {
  //   return await this.store.collection('SetDemoQuestion').snapshotChanges();
  // }
  // setDemoAnswers(record: any) {
  //   this.store.collection('DemoQuestionAnswers').add(record).then(() => {
  //   }).catch((err: { message: any; }) => {
  //     console.log(err.message)
  //   })
  // }
  // async getDemoAnswers() {
  //   return await this.store.collection('DemoQuestionAnswers').snapshotChanges();
  // }
}
