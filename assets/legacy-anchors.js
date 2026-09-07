/*
 * Legacy anchor redirects.
 *
 * Until v1.0 the standard was a single page and every section was an in-page
 * anchor. External links and the published whitepaper may still cite them.
 * Seven of the thirteen moved to their own page; the other six (#hero,
 * #problem, #evolution, #threat, #layers, #arc) still resolve here and are
 * deliberately absent from the map below.
 *
 * Loaded on the home page only.
 */
(function () {
  var moved = {
    '#definition':     '/control-plane/#definition',
    '#architecture':   '/control-plane/#stack',
    '#capabilities':   '/control-plane/#capabilities',
    '#capa':           '/capa/',
    '#maturity':       '/maturity/',
    '#migration':      '/migration/',
    '#implementations': '/implementations/',
    '#about':          '/about/',
    '#open-questions': '/about/#open-questions'
  };

  var target = moved[window.location.hash];
  if (target) {
    window.location.replace(target);
  }
})();
