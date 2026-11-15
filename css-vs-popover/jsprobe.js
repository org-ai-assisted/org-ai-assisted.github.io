// Positive JavaScript control for the no-JS reveal demo.
// With JS ON it reveals the red "JS is ON" badge and stamps a live time -- impossible
// without JS. With JS OFF (Tor Browser Safest) this never runs; the <noscript> green
// badge shows instead. The two badges move in opposite directions across the two states.
(function () {
  var b = document.getElementById('json');
  if (b) { b.hidden = false; }
  var t = document.getElementById('jts');
  if (t) { t.textContent = 'ran ' + new Date().toISOString(); }
})();
