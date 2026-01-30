import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class InputComponent {
  @Input() Label!: string;
  @Input() Placeholder!: string;
  @Input() IsPassword!: string;
  @Input() typeInput: string = "text";
  @Input() Image!: string;
  protected iconPassword: string = "/eye-closed.svg"
  
  ngOnInit(){
    if(this.IsPassword === "true"){
      this.typeInput = "password"
    }
  }

  protected handlePassowrd() {
    if (this.iconPassword === "/eye-closed.svg"){
      this.iconPassword = "/eye.svg"
      this.typeInput = "text"
    }
    else {
      this.iconPassword = "/eye-closed.svg"
      this.typeInput = "password"
    }
  }
}
