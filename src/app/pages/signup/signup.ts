import { Component } from '@angular/core';
import { PrimaryButton } from '../../components/ui/primary-button/primary-button';
import { SecondaryButton } from "../../components/ui/secondary-button/secondary-button";
import { InputComponent } from "../../components/ui/input/input";

@Component({
  selector: 'app-signup',
  imports: [PrimaryButton, SecondaryButton, InputComponent],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {

}
