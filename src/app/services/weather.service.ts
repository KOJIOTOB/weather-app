// src/app/services/weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string) {
    return this.http.get(
      `${this.apiUrl}/weather?q=${city}&units=metric&appid=${environment.openWeatherApiKey}`
    );
  }

  getForecast(city: string) {
    return this.http.get(
      `${this.apiUrl}/forecast?q=${city}&units=metric&appid=${environment.openWeatherApiKey}`
    );
  }
}
