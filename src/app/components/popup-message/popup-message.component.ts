import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-popup-message',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './popup-message.component.html',
  styleUrl: './popup-message.component.css'
})
export class PopupMessageComponent {

  @Input() message: string = '';
  @Input() type: 'success' | 'error' = 'success';


}
