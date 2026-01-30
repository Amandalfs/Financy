import { Component, signal } from '@angular/core';
import { PrimaryButton } from '../../components/ui/primary-button/primary-button';
import { SecondaryButton } from "../../components/ui/secondary-button/secondary-button";
import { InputComponent } from "../../components/ui/input/input";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PrimaryButton, SecondaryButton, InputComponent],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class login {
  protected readonly title = signal('financy');
}
