import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { WeatherService } from '../../services/weather.service';
import { WeatherDisplayComponent } from '../weather-display/weather-display.component';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

interface ForecastData {
  dt_txt: string;
  main: {
    temp_min: number;
    temp_max: number;
    humidity?: number;
    pressure?: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind?: {
    speed: number;
  };
}

@Component({
  selector: 'app-search-city',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    WeatherDisplayComponent,
  ],
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchCityComponent {
  cityControl = new FormControl<string>('', {
    validators: [Validators.required, Validators.minLength(2)],
    nonNullable: true
  });

  weatherData: WeatherData | null = null;
  forecastData: ForecastData[] = [];
  error: string | null = null;
  loading = false;
  favoriteCities: string[] = [];

  constructor(private weatherService: WeatherService, private cdr: ChangeDetectorRef) {}

  searchCity(city: string | null = null): void {
    const cityName = (city || this.cityControl.value.trim()).toLowerCase();

    if (!cityName) {
      this.error = 'City name is required.';
      this.cdr.markForCheck();
      return;
    }

    this.loading = true;
    this.error = null;
    this.weatherData = null;
    this.forecastData = [];
    this.cdr.markForCheck();

    this.weatherService.getCurrentWeather(cityName).subscribe({
      next: (data) => {
        this.weatherData = data as WeatherData;
        this.error = null;
        this.loading = false;

        if (cityName && !this.favoriteCities.includes(cityName)) {
          this.favoriteCities.push(cityName);
        }

        this.cdr.markForCheck();
      },
      error: () => {
        this.error = 'City not found. Please try again.';
        this.weatherData = null;
        this.loading = false;
        this.cdr.markForCheck();
      }
    });

    this.weatherService.getForecast(cityName).subscribe({
      next: (data: any) => {
        this.forecastData = data.list
          .filter((_: any, index: number) => index % 8 === 0)
          .map((item: any) => ({
            dt_txt: item.dt_txt,
            main: item.main,
            weather: item.weather,
            wind: item.wind
          })) as ForecastData[];
        this.cdr.markForCheck();
      },
      error: () => {
        this.forecastData = [];
        this.cdr.markForCheck();
      }
    });
  }

  clearError(): void {
    this.error = null;
    this.cdr.markForCheck();
  }

  removeCity(city: string): void {
    this.favoriteCities = this.favoriteCities.filter((c) => c !== city);
    this.cdr.markForCheck();
  }

  selectCity(city: string): void {
    this.searchCity(city);
  }

  clearWeatherData(): void {
    this.weatherData = null;
    this.forecastData = [];
    this.cdr.markForCheck();
  }

  hasWeatherData(): boolean {
    return !!this.weatherData || this.forecastData.length > 0;
  }
}
