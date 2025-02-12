import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { NumberPipe } from '../../+pipes/number.pipe';

@Component({
  selector: 'app-number',
  imports: [NumberPipe],
  templateUrl: './number.component.html',
  styleUrl: './number.component.scss'
})
export class NumberComponent {

}
