(function () {
  var routes = {}
  var prevRoute = null

  window.route = function (path, controller) {
    routes[path] = { controller: controller }
  }

  function router () {
    var url = location.hash.slice(1)
    if ( ! url) {
      window.location.hash = Object.keys(routes)[0] || ''
      return
    }
    var curRoute = routes[url];
    if (curRoute && curRoute.controller) {
      curRoute.controller(true)
      if (prevRoute && prevRoute.controller) {
        prevRoute.controller(false)
      }
      prevRoute = curRoute
    }
  }

  window.addEventListener('hashchange', router)
  window.addEventListener('load', router)
})();
