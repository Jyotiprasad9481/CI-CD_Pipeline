import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFormComponent } from './angular-form/angular-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { ApiCallComponent } from './api-call/api-call.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path : 'angularForm', component: AngularFormComponent},
  {path : 'reactiveForm', component: ReactiveFormComponent},
  {path : 'angularMaterial', component: AngularMaterialComponent},
  {path : 'apiCall', component: ApiCallComponent},
  {path : 'parent', component: ParentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
