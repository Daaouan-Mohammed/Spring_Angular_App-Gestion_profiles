import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSideComponent } from './components/admin-side/admin-side.component';
import { UserSideComponent } from './components/user-side/user-side.component';

const routes: Routes = [
  { path: 'admin', component: AdminSideComponent },
  { path: 'user', component: UserSideComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
