import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-field',
  standalone: true,
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.css'
})
export class FormFieldComponent {
  @Input() label = '';
  @Input() hint?: string;
  @Input() error?: string | null;
  @Input() forId?: string;
}
