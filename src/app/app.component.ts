import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgForOf, TitleCasePipe} from "@angular/common";
import { ProductComponent } from './components/product/product.component';
import {IProduct} from "./models/product";
import {ProductsService} from "./services/products.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe, ProductComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'First Angular App'
  products: IProduct[] = []

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsService.getAll().subscribe(products => {
      this.products = products
    })
  }
}
