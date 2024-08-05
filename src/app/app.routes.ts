import { Routes } from '@angular/router';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { FomArrayComponent } from './components/fom-array/fom-array.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: "", redirectTo: "/user-login", pathMatch: "full" },
    { path: "add-user", component: ReactiveFormComponent },
    { path: "user-login", component: UserLoginComponent },
    { path: "logut", component: UserLoginComponent },
    { path: "form-array", component: FomArrayComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
];
