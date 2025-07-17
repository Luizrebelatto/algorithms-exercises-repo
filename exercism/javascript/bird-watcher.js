export function totalBirdCount(birdsPerDay) {
    let totalBirds = 0
    for (let index = 0; index < birdsPerDay.length; index++) {
      totalBirds += birdsPerDay[index]
    }
    return totalBirds
  }
  
export function birdsInWeek(birdsPerDay, week) {
    let totalBirds = 0;
    for (let i = (week - 1) * 7; i < (week * 7); i++) {
      totalBirds += birdsPerDay[i];
    }
    return totalBirds;
}
  

export function fixBirdCountLog(birdsPerDay) {
    for (let i = 0; i < birdsPerDay.length; i += 2) {
      birdsPerDay[i]++
    }
    return birdsPerDay
}