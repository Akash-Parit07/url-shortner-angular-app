import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-shorturl',
  templateUrl: './shorturl.component.html',
  styleUrls: ['./shorturl.component.scss']
})
export class ShorturlComponent {
  @Input() shortUrl : string = "";
  @Input() originalUrl : string = "";

  constructor(private snackBar: MatSnackBar){}
}
