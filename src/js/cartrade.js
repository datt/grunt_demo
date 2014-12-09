 $(document).ready(function() {
    var Cartrade = {}, s;
    s = undefined;

    Cartrade = {
      init: function() {
        console.log(Cartrade.bindUIActions);
        s = this.settings;
        this.bindUIActions();
        $(".noUi-origin").last().css({background: "#fff", border: "none"});
      },


      bindUIactions: function() {
        this.dropdown();
        this.rangeslider();
      },


      dropdown: function() {
        $( ".dropdownToggle").on( "click", function(e) {
          $(".dropdown").removeClass('active');
          $(this).parent().addClass('active');
        });
      },

      rangeslider: function() {
        $(".rangeMeter").noUiSlider({
          start: [ 20, 80 ],
          margin: 10,
          range: {
            'min': 0,
            'max': 100
          },
          slide: function(e){
            console.log("range",e);
          }
        });
      }
    };

    // $.proxy(Cartrade.init(), Cartrade);
});