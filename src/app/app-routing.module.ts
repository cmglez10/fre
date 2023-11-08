import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'competition',
    pathMatch: 'full',
  },
  {
    path: 'competition',
    loadChildren: () =>
      import('./modules/competition/competition.module').then(
        m => m.CompetitionModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
