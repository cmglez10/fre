import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitionRoutingModule } from './competition-routing.module';
import { CompetitionComponent } from './components/competition/competition.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [CompetitionComponent],
  imports: [CommonModule, CompetitionRoutingModule, MatTableModule],
})
export class CompetitionModule {}
