function padTo2Digits(num: number) {
  return num.toString().padStart(2, "0");
}

export function convertDateToAmPm(date: Date): string {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function convertMillisecondsToHourMinute(milliseconds: number): string {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;

  minutes = seconds >= 30 ? minutes + 1 : minutes;
  minutes = minutes % 60;

  hours = hours % 24;

  return `${padTo2Digits(hours)}h ${padTo2Digits(minutes)}m`;
}

export function hourMinuteDiff(date1: Date, date2: Date): string {
  let diff = date2.getTime() - date1.getTime();
  return convertMillisecondsToHourMinute(diff);
}
