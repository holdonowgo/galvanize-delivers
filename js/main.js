window.onload = function() {
    var btnSubmit = document.getElementById("submit");
    // NOTE: showAlert(); or showAlert(param); will NOT work here.
    // Must be a reference to a function name, not a function call.


    let divCards = document.getElementsByClassName('card');

    for (let divCard of divCards) {
      for(let child of divCard.children) {
        let a = child.children[1];
        // console.log(a);
        a.addEventListener('click', function(evt) {
            evt.preventDefault();
            // console.log(divCard.children[1].children[0].textContent);
            // console.log(divCard.children[1].children[1].textContent);
            // console.log(child);
            // console.log(child.children[1].children);
            let name = divCard.children[1].children[0].textContent;
            let price = divCard.children[1].children[1].textContent;
            // console.log(child.children[0].textContent);
            // console.log(child.children[1].textContent);
            addItem(name, price);
        });
      }
    };

    function placeOrder(evt) {
        Materialize.toast('I am a toast!', 4000)
    };

    function addItem(name, price) {
      console.log(name, price); return;
      let tbody = document.getElementsByTagName('tbody')[0];
      let tr = document.createElement('tr');
      let tdItem = document.createElement('td');
      tdItem.textContent = name;
      let tdDummy = document.createElement('td');
      let tdPrice = document.createElement('td');
      tdPrice.textContent = price;
      tbody.appendChild(tr);
      tr.appendChild(tdItem);
      tr.appendChild(tdDummy);
      tr.appendChild(tdPrice);
    }
}
