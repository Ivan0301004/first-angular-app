import { CurrencyPipe, NgComponentOutlet, NgIf, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: true,
  imports: [TitleCasePipe, CurrencyPipe, NgIf],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  name: string = 'batman';
  edad: string = '21';
  amount: number = 12000;

  get capitalName(): string {
    return this.name.charAt(0).toUpperCase() + this.name.substring(1);
  }

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  changeHero(): void {
    this.name = 'ironman';
  }

  changeAge(): void {
    this.edad = '27';
  }
}
