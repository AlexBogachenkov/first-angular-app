import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {FocusDirective} from "../../directives/focus.directive";
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    FocusDirective
  ],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent {

  constructor(private productService: ProductsService, private modalService: ModalService) {

  }

  form = new FormGroup({
    title: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
  })

  get title() {
    return this.form.controls.title as FormControl;
  }

  submit() {
    this.productService.create({
      title: this.form.controls.title.value as string,
      price: 1999,
      description: 'description of a coin',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Achaemenid_coin_daric_420BC_front.jpg',
      category: 'anique',
      rating: {
        rate: 42,
        count: 1
      }
    }).subscribe(() => {
      this.form.reset();
      this.modalService.close();
    });
  }

}
