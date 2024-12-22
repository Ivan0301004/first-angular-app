import { ClipboardModule } from '@angular/cdk/clipboard';
import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiDocCopy } from '@taiga-ui/addon-doc';
import { TuiTable } from '@taiga-ui/addon-table';
import { TuiAccordion } from '@taiga-ui/kit';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [TuiTable, ClipboardModule, TuiAccordion, TitleCasePipe, NgIf, NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  heroNames: { name: string; age: number }[] = [
    { name: 'spiderman', age: 26 },
    { name: 'ironman', age: 30 },
    { name: 'batman', age: 24 },
    { name: 'hulk', age: 21 },
    { name: 'flash', age: 29 },
    { name: 'venom', age: 27 },
    { name: 'joker', age: 22 },
  ];

  readonly columns: string[] = Object.keys(this.heroNames[0]);

  ngOnInit() {
    console.log('Hero Names:', this.heroNames);
  }

  heroDeleted?: { name: string; age: number };

  removelastHero(): void {
    this.heroDeleted = this.heroNames.pop();
  }
}
