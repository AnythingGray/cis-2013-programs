var $ = function(id) {
    return document.getElementById(id);
}

var calculate_click = function() {
    //DEBUG alert("in calculate click");
    var subtotal = parseFloat($("subtotal").value);
    var taxRate = parseFloat($("taxRate").value);
    var shippingCharges = parseFloat($("shippingCharges").value);
    //DEBUG alert("Shpping charge " + shippingCharges + " Tax Rate " + taxRate + " Subtotal " + subtotal);
    
    if (isNaN(subtotal) || isNaN(taxRate) || isNaN(shippingCharges)){
        alert("Please enter numbers");
        return false;
    }

    $("salesTax").value = "";
    $("total").value = "";

    var salesTax = subtotal * (taxRate / 100);
    //DEBUG alert("The sales tax is " + salesTax);
    salesTax = parseFloat(salesTax.toFixed(2));
    var total = subtotal + salesTax + shippingCharges;
    //DEBUG alert("Total is" + total);

    $("salesTax").value = "$" + salesTax.toFixed(2);
    $("total").value = "$" + total.toFixed(2);

}


window.onload = function() {
    $("subtotal").value = "";
    $("taxRate").value = "";
    $("shippingCharges").value = "";
    $("salesTax").value = "";
    $("total").value = "";
}



