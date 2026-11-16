import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateTimeService {
  get utcNow(): Date {
    return new Date();
  }

  get utcNowIsoString(): string {
    return this.utcNow.toISOString();
  }
}