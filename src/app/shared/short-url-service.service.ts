import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlServiceService {

  reqData : any;

  constructor(private httpClient: HttpClient) { }

  generatedShortUrl(url: string){
    this.reqData = {
      "originalUrl": url
    };
    return this.httpClient.post(`${environment.restApi}/convert`, this.reqData);
  }

  getOriginalUrl(hashUrl: string){
    return this.httpClient.get(`${environment.restApi}/`.concat(hashUrl));
  }
}
