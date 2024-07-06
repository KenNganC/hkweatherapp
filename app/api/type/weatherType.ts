export interface Weather {
  rainfall: Rainfall;
  warningMessage: string[];
  icon: number[];
  iconUpdateTime: string;
  uvindex: UvIndex;
  updateTime: string;
  temperature: Humidity;
  tcmessage: string;
  mintempFrom00To09: string;
  rainfallFrom00To12: string;
  rainfallLastMonth: string;
  rainfallJanuaryToLastMonth: string;
  humidity: Humidity;
}

export interface Humidity {
  recordTime: Date;
  data: HumidityItem[];
}

export interface HumidityItem {
  unit: string;
  value: number;
  place: string;
}

export interface Temperature {
  recordTime: Date;
  data: TemperatureItem[];
}

export interface TemperatureItem {
  unit: string;
  value: number;
  place: string;
}
export interface Rainfall {
  data: RainfallItem[];
  startTime: Date;
  endTime: Date;
}

export interface RainfallItem {
  unit: string;
  place: string;
  max: number;
  main: string;
  min?: number;
}

export interface UvIndex {
  data: UvIndexItem[];
  recordDesc: string;
}

export interface UvIndexItem {
  place: string;
  value: number;
  desc: string;
}
