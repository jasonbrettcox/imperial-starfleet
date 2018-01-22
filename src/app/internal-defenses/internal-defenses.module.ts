import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaserCannonComponent } from './laser-cannon/laser-cannon.component';
import { TurretComponent } from './turret/turret.component';
import { DeathSquareComponent } from './death-square/death-square.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LaserCannonComponent,
    TurretComponent,
    DeathSquareComponent
  ],
  exports:[
    LaserCannonComponent,
    TurretComponent,
    DeathSquareComponent


  ]

  
})
export class InternalDefensesModule { }
