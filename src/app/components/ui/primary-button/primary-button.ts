import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './primary-button.html',
  styleUrl: './primary-button.css',
})

export class PrimaryButton {
  @Input() Label!: String; 
  @Input() Size!: "sm" | "md"
  @Input() Image!: string;
}
