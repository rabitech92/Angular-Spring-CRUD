import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreate } from './component/user-create/user-create';

const routes: Routes = [
  {path:'',redirectTo:'user',pathMatch:'full'},
  {path :'users',component: UserCreate}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
