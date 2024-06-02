$(document).ready(function() {
  var userData = {};
  var cartItems = [];
  var totalPrice = 0;

  $('#saveButton').on('click', function(event) {
      event.preventDefault();
      userData.name = $('#name').val();
      userData.email = $('#email').val();

      $('#userInfo').html(`Nome: ${userData.name}, Email: ${userData.email}`);
      $('#userInfo').removeClass('hide');
      $('.add-to-cart').prop('disabled', false);
  });

  window.adicionarAoCarrinho = function(itemName, itemPrice) {
      cartItems.push({ name: itemName, price: itemPrice });
      totalPrice += itemPrice;

      $('#cartItems').append(`<li>${itemName} - R$ ${itemPrice.toFixed(2)}</li>`);
      $('#totalPrice').text(totalPrice.toFixed(2));
  };
});
