import { TuiRoot } from "@taiga-ui/core";
import { Component, NgModule } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { NgModel } from '@angular/forms';
import { HeroComponent } from "./heroes/hero/hero.component";
import { ListComponent } from "./heroes/list/list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, HeroComponent, ListComponent, TuiRoot, TuiRoot],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'first-app';
  num: number = 0;

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowUp' && event.ctrlKey && event.shiftKey) {
      this.sumNum();
      event.preventDefault();
    }
  }

  sumNum(): number {
    return (this.num += 1);
  }

  resNum(): number {
    return (this.num -= 1);
  }

  reset(): void {
    this.num = 0;
  }
}
