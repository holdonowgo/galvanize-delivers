
      window.onload = function() {
        var btnSubmit = document.getElementById("submit");
        // NOTE: showAlert(); or showAlert(param); will NOT work here.
        // Must be a reference to a function name, not a function call.
        btnSubmit.onclick = placeOrder;
      };

      function placeOrder(evt) {
        Materialize.toast('I am a toast!', 4000)
      }
