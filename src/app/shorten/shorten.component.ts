import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ShortUrlServiceService } from '../shared/short-url-service.service';

@Component({
  selector: 'app-shorten',
  templateUrl: './shorten.component.html',
  styleUrls: ['./shorten.component.scss']
})
export class ShortenComponent {
  isShortUrlGenerated: boolean = false;
  shortUrl : string = "";
  originalUrl : string = "";
  generateUrlForm: FormGroup | any;
  constructor(private snackBar: MatSnackBar, private formBuilder: FormBuilder, private shortUrlService: ShortUrlServiceService){
  }

  ngOnInit(){
    this.generateUrlForm = this.formBuilder.group({
      url:['', [Validators.required]]
    });
  }

  onSubmit(){
    if(this.generateUrlForm.valid){
      // console.log(this.generateUrlForm);
      const url = this.generateUrlForm.value.url;

      this.shortUrlService.generatedShortUrl(url).subscribe((response: any)=>{
        console.log(response);
        const status = response.status;

        if(status == "Success"){
          this.isShortUrlGenerated = true;
          this.shortUrl = response.shortUrl;
          this.originalUrl = response.originalUrl;
        }
        else if(status == "Invalid Url"){
          this.isShortUrlGenerated = false;
          this.snackBar.open('Invalid Url entered', 'Close', {duration: 6000});
        }
      },
      error=>{
        this.isShortUrlGenerated = false;
        this.snackBar.open('Some error occured', 'Close', {duration: 6000});
      });
    }
  }
}
