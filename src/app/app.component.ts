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

  navigateTo(sectionId: string, event?: MouseEvent): void {
    event?.preventDefault();
    this.menuOpen = false;

    const section = document.getElementById(sectionId);
    if (!section) return;

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', '#' + sectionId);
  }
  selectCategory(category: string): void {
    this.selectedCategory = category;
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  }

  sendToWhatsApp(event: SubmitEvent): void {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const message = [
      'Hola, quisiera consultar por un repuesto.',
      `Nombre: ${data.get('nombre')}`,
      `Vehículo: ${data.get('marca')} ${data.get('modelo')}`,
      `Repuesto: ${data.get('text')}`,
    ].join('\n');

    window.open(`https://wa.me/584142410941?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }
}
