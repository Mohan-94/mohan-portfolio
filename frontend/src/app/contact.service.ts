import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly api = 'https://mohan-portfolio-api.onrender.com/api/contact';

  constructor(private http: HttpClient) {}

  send(payload: ContactRequest): Observable<{message:string}> {
    return this.http.post<{message:string}>(this.api, payload);
  }
}
