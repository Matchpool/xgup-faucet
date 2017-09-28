// nice http://javascript.crockford.com/remedial.html
// JavaScript Micro-Templating https://johnresig.com/blog/javascript-micro-templating/

window.template = {
  txItem: function (params) {
    return `<div class="tile tile-centered" style="margin-top: 15px">
              <div class="tile-content">
                <div class="tile-title">${ params.title }</div>
                <a href="${ params.url }" class="tile-subtitle">${ params.subtitle }</a>
              </div>
            </div>`
  },

  errorLabel: function (params) {
    return `<span class="label label-error text-center d-block">${ params.text }</span>`
  }
}
