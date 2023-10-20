import { Injectable } from '@angular/core';
import { addDoc, collection, doc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class EngineService {

  constructor() { }



  setDemoQuestions(record: any) {
    //record.id = doc(collection(this.fs, 'id')).id;
    // return addDoc(collection(this.fs, 'DemoQuestions'), record)
  }
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
