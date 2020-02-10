$(document).ready(function() {
  setInterval(function() {
    var time = new Date()
    var h = time.getHours() > 12 ? time.getHours() - 12 : time.getHours()
    var m = time.getMinutes()
    var s = time.getSeconds()
    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s

    var set = h + ":" + m + ":" + s
    $("#clock").html(set)
  }, 1000)
})
