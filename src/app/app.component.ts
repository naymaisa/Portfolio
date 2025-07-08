import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AboutComponent } from "./components/about/about.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutComponent, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PortfolioNayara';
}
