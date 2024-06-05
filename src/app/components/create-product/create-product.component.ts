import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent {

  form = new FormGroup({
    title: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
  })

  get title() {
    return this.form.controls.title as FormControl;
  }

  submit() {
    console.log(this.form.value);
  }

}
