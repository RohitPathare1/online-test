import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { QuizComponent } from './containers/quiz/quiz.component';
import { HomeComponent } from './containers/home/home.component';




const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'get-demo',
    component: QuizComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
