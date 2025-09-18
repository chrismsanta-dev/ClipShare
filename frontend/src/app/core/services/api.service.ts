import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment/environment.development';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly apiEndpoint = environment.apiEndpoint;

  constructor(private readonly httpClient: HttpClient) {}

  public get<T = unknown>(route: string): Observable<T> {
    return this.httpClient.get<T>(this.apiEndpoint + route);
  }
}
