import { Routes } from '@angular/router';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { FomArrayComponent } from './components/fom-array/fom-array.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { UserPostListComponent } from './components/dashboard/user-post-list/user-post-list.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { UploadImageComponent } from './components/dashboard/upload-image/upload-image.component';

export const routes: Routes = [
    { path: "", redirectTo: "/user-login", pathMatch: "full" },
    { path: "add-user", component: ReactiveFormComponent },
    { path: "user-login", component: UserLoginComponent },
    { path: "logout", component: UserLoginComponent },
    { path: "form-array", component: FomArrayComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'posts/:id', component: UserPostListComponent, canActivate: [AuthGuard] },
    { path: 'upload-image', component: UploadImageComponent, canActivate: [AuthGuard] },
    { path: 'comments/:id', component: CommentListComponent, canActivate: [AuthGuard] }
];
