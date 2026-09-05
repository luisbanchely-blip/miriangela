import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly contactEmail = 'miriangela.alvarado@gmail.com';
  readonly showMobileMenu = signal(false);

  toggleMobileMenu(): void { this.showMobileMenu.update((isOpen) => !isOpen); }
}
