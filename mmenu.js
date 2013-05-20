(function ($) {
  
  /**
   * Init the mmenu plugin.
   */
  function initMmenu() {
    $("#mmenu-menu").mmenu({
      slidingSubmenus: true,
      position: "left",
      configuration: {
        menuNodetype: "div",
        selectedClass: "active"
       }
    });
  }
  
  /**
   * Drupal callback.
   */
  Drupal.behaviors.mmenu = {
    attach: function (context) {
      $("body").once(function(){ initMmenu(); })
    }
  }
  
})(jQuery);