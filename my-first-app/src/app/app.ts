import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hello } from "./hello/hello";
import { Welcome } from "./welcome/welcome";
import { About } from "./about/about";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hello, Welcome, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-first-app';
}
