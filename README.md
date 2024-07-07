# HK Weather App

A Weather App that displays the current weather for the user's location built with react native.

![](demo.gif)

# Consideration / Limitation

### Probability Of Precipitation

In the provided figma, there is probability of precipitation(降雨機率) in the modal. But in the weather api there is no such information. So I decided to show highest rainfall record(最高雨量紀錄) instead.

### Weather Image Background

Because of the limitation of data, there is only 2 types of image background is showing. (sunny / rain)

# Build Project

https://reactnative.dev/docs/set-up-your-environment

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
#install pod package in ios folder
pod install
# using npm
npm run ios

# OR using Yarn
yarn ios
```

# Data Source

## Weather Api

https://data.gov.hk/en-data/dataset/hk-hko-rss-current-weather-report/resource/a331647b-e2b8-4e5b-84ee-27b3ff3570c9

## Location of Weather Station

https://www.hko.gov.hk/en/cis/stn.htm
