import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

type TagColor = "Gray" | "Blue" | "Purple" | "Pink" | "Red" | "Orange" | "Yellow" | "Green"

@Component({
  selector: 'app-tag',
  imports: [NgClass],
  templateUrl: './tag.html',
  styleUrl: './tag.css',
})
export class Tag {
  @Input() Color!: TagColor;
  @Input() Text!: String;
}
