import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './sections.css'],
})
export class AppComponent {
  menuOpen = false;
  selectedCategory = '';

  selectCategory(category: string): void {
    this.selectedCategory = category;
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  }
}
