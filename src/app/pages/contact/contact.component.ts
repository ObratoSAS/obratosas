import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { ButtonComponent } from '../../components/button/button.component';
import { FormFieldComponent } from '../../components/form-field/form-field.component';
import { CardComponent } from '../../components/card/card.component';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SectionHeaderComponent,
    ButtonComponent,
    FormFieldComponent,
    CardComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  status: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  services = ['Ornamentación', 'Conserjería', 'Jardinería', 'Servicios Generales'];

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(7)]],
    company: ['', [Validators.required]],
    sector: ['', [Validators.required]],
    serviceList: this.fb.control<string[]>([], { validators: [Validators.required] }),
    city: [''],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  constructor(private fb: FormBuilder, private title: Title, private meta: Meta) {
    this.title.setTitle('Contacto | Obrato');
    this.meta.updateTag({
      name: 'description',
      content: 'Solicita una cotización o agenda una asesoría con nuestro equipo.'
    });
  }

  toggleService(service: string): void {
    const current = this.form.value.serviceList ?? [];
    if (current.includes(service)) {
      this.form.patchValue({ serviceList: current.filter((item) => item !== service) });
    } else {
      this.form.patchValue({ serviceList: [...current, service] });
    }
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status = 'loading';
    setTimeout(() => {
      const success = Math.random() > 0.1;
      this.status = success ? 'success' : 'error';
      if (success) {
        this.form.reset();
      }
    }, 1200);
  }

  getError(controlName: string): string | null {
    const control = this.form.get(controlName);
    if (!control || !control.touched || !control.errors) {
      return null;
    }
    if (control.errors['required']) {
      return 'Este campo es obligatorio.';
    }
    if (control.errors['email']) {
      return 'Ingresa un email válido.';
    }
    if (control.errors['minlength']) {
      return `Mínimo ${control.errors['minlength'].requiredLength} caracteres.`;
    }
    return 'Dato inválido.';
  }
}
