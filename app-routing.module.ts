import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/layout/home/home.module').then(m => m.HomeModule) },
  { path: 'about', loadChildren: () => import('./pages/layout/about/about.module').then(m => m.AboutModule) },
  { path: 'sign-in', loadChildren: () => import('./auth/sign-in/sign-in.module').then(m => m.SignInModule) },
  { path: 'sign-up', loadChildren: () => import('./auth/sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: 'forgot-password', loadChildren: () => import('./auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
  { path: 'verify-email', loadChildren: () => import('./auth/verify-email/verify-email.module').then(m => m.VerifyEmailModule) },
  { path: 'usuarios', loadChildren: () => import('./pages/admin/usuarios/usuarios.module').then(m => m.UsuariosModule) },
  { path: 'contacto', loadChildren: () => import('./pages/layout/contacto/contacto.module').then(m => m.ContactoModule) },
  { path: 'misturnos', loadChildren: () => import('./pages/turnos/pages/mis-turnos/mis-turnos.module').then(m => m.MisTurnosModule) },
  { path: 'administrador', loadChildren: () => import('./pages/admin/administrador/administrador.module').then(m => m.AdministradorModule), },
  { path: 'especialidades', loadChildren: () => import('./pages/especialidades/especialidades.module').then(m => m.EspecialidadesModule) },
  { path: 'especialistas', loadChildren: () => import('./auth/sign-up-especialista/sign-up-especialista.module').then(m => m.SignUpEspecialistaModule) },
  { path: 'jornadas', loadChildren: () => import('./pages/jornada/jornada.module').then(m => m.JornadaModule) },
  { path: '**', loadChildren: () => import('./pages/layout/error404/error404.module').then(m => m.Error404Module) },
  { path: 'error', loadChildren: () => import('./pages/layout/error404/error404.module').then(m => m.Error404Module) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
