// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "controllers"
import "@hotwired/turbo-rails"

require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")
require("local-time").start()
require("@hotwired/turbo")

window.Rails = Rails

import "bootstrap"
import "data-confirm-modal"

$(document).on("turbo:load", () => {
  console.log("turbo!")
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
})
