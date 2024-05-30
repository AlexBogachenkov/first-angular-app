import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AsyncPipe, NgForOf, NgIf, TitleCasePipe} from "@angular/common";
import { ProductComponent } from './components/product/product.component';
import {IProduct} from "./models/product";
import {ProductsService} from "./services/products.service";
import {Observable, tap} from "rxjs";
import {GlobalErrorComponent} from "./components/global-error/global-error.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe, ProductComponent, NgForOf, NgIf, AsyncPipe, GlobalErrorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'First Angular App'
  // products: IProduct[] = []
  loading = false
  products$: Observable<IProduct[]>

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productsService.getAll().pipe(
      tap(() => this.loading = false)
    )
    // this.productsService.getAll().subscribe(products => {
    //   this.products = products
    //   this.loading = false
    // })
  }
}
