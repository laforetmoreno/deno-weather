import { getWeather } from "https://deno.land/x/deno_weather/mod.ts";
import { writeFileStrSync } from "https://deno.land/std/fs/mod.ts";

const weather = await getWeather("london, uk");

writeFileStrSync("./weather.txt", JSON.stringify(weather));

console.log("weather => ", weather);
