import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

interface Weather {
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

interface Forecast {
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
  selector: 'app-weather-display',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule, MatIconModule],
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss'],
})
export class WeatherDisplayComponent {
  @Input() weather: Weather | null = null;
  @Input() forecast: Forecast[] = [];

  getWeatherIcon(icon: string): string {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
  }

  clearAllData(): void {
    this.weather = null;
    this.forecast = [];
  }

  hasForecast(): boolean {
    return this.forecast.length > 0;
  }

  hasWeatherData(): boolean {
    return !!this.weather || this.hasForecast();
  }

  trackByForecast(index: number, item: Forecast): string {
    return item.dt_txt;
  }
}
