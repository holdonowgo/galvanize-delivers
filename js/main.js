window.onload = function() {
    let item_count = 0;
    const salesTax = 0.095;
    let btnSubmit = document.getElementById("submit");
    // NOTE: showAlert(); or showAlert(param); will NOT work here.
    // Must be a reference to a function name, not a function call.
    $("#target").submit(function(event) {
        event.preventDefault();
        if (item_count > 0) {
            // Materialize.toast('Your order was placed successfully!', 4000);
            clear_data();
            this.submit();
        } else {
            Materialize.toast('Your cart is empty!', 4000, '',function(){$(this).unbind('submit').submit()});
            // $(this).unbind('submit').submit()
        }
    });

    let divCards = document.getElementsByClassName('card');

    for (let divCard of divCards) {
        for (let child of divCard.children) {
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

    function clear_data(evt) {
      item_count = 0;
        Materialize.toast('Data cleared!', 4000)
    };

    function addItem(name, price) {
        // console.log(name, price); return;
        let tbody = document.getElementsByTagName('tbody')[0];
        let tr = document.createElement('tr');
        let tdItem = document.createElement('td');
        tdItem.textContent = name;
        let tdDummy = document.createElement('td');
        let tdPrice = document.createElement('td');
        tdPrice.style.textAlign = "right";
        tdPrice.textContent = price;
        tdPrice.setAttribute('class', 'itemPrice');
        tbody.appendChild(tr);
        tr.appendChild(tdItem);
        tr.appendChild(tdDummy);
        tr.appendChild(tdPrice);

        item_count++;

        updateTotals();
    }

    function updateTotals() {
        let tax = 0;
        let total = 0;
        let subTotal = 0;
        // let tbody = document.getElementsByTagName('tbody')[0];
        let items = document.getElementsByClassName('itemPrice');
        for (let item of items) {
            let a = item.textContent;
            a = a.split('');
            a.shift();
            a = a.join('');
            a = parseFloat(a);
            subTotal += a;
            // console.log(subTotal);

            let tdSubtotal = document.getElementById('subtotal');
            let tdTax = document.getElementById('tax');
            let tdTotal = document.getElementById('total');

            tdSubtotal.textContent = '$' + subTotal;
            tax = parseFloat((subTotal * salesTax).toFixed(2));
            console.log(typeof tax);
            tdTax.textContent = '$' + tax;
            total = parseFloat(subTotal) + tax;
            tdTotal.textContent = '$' + total;
        }
    }
}
