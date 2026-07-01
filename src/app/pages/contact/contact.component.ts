import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ScrollRevealDirective } from '../../shared/scroll-reveal/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  submitted = signal(false);

  programOptions = [
    'Junior Foundation Program (Ages 6-10)',
    'Youth Development Program (Ages 11-14)',
    'Elite Performance Squad (Ages 15-19)',
    'Fast Bowling Clinic',
    'Batting Masterclass',
    'Wicketkeeping Specialist Camp',
    'Not sure — please advise',
  ];

  faqs = [
    {
      question: 'How do I book a free trial session?',
      answer:
        'Fill out the enquiry form with your preferred program, or call us directly. Our coaching team will schedule a free assessment session within the week.',
    },
    {
      question: 'What should a player bring to the first session?',
      answer:
        'Comfortable sports clothing, sports shoes, a water bottle, and any cricket equipment they already own. Basic kit can also be borrowed for the trial.',
    },
    {
      question: 'Do you provide transport for tours?',
      answer:
        'Yes, transport, accommodation and meals are arranged by the academy for all outstation tours. Details are shared with parents before registration closes.',
    },
    {
      question: 'Are there girls-only batches?',
      answer:
        'Yes, we run dedicated girls\u2019 batches across age groups, along with mixed batches for younger age groups.',
    },
  ];

  private fb = inject(FormBuilder);

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s]{7,15}$/)]],
    program: [this.programOptions[0], [Validators.required]],
    message: ['', [Validators.maxLength(600)]],
  });

  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get phone() { return this.form.get('phone'); }
  get program() { return this.form.get('program'); }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const val = this.form.value as { name: string; email: string; phone: string; program: string; message?: string };

    // Build mailto link to send enquiry to the academy inbox
    const to = 'ylcricketacademy@gmail.com';
    const subject = `YL Cricket Academy Enquiry from ${val.name || 'Website Visitor'}`;
    const body = `Name: ${val.name || ''}\nEmail: ${val.email || ''}\nPhone: ${val.phone || ''}\nProgram: ${val.program || ''}\n\nMessage:\n${val.message || ''}`;
    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the user's email client with prefilled mail — users can send directly.
    window.location.href = mailto;

    // Mark as submitted and reset the form (retain default program)
    this.submitted.set(true);
    this.form.reset({ program: this.programOptions[0] });
  }
}
