function findDifference (date1, date2) {
  var difference = date1.getTime() - date2.getTime()
  return Math.round(difference / (1000 * 60))
}

function msToMinutes (ms) {
  return Math.round(ms / (1000 * 60))
}