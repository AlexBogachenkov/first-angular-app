import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleCasePipe } from "@angular/common";
import { ProductComponent } from './components/product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TitleCasePipe, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'First Angular App';
}
