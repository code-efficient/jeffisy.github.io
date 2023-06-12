/*==============================CODE FOR NAV MENU====================================*/


const Container = document.querySelector('#menuItem');

let isClicked = true;

let menuBar = function(){
  if(isClicked){
    Container.style.display = 'block';
    isClicked = false;
  }else{
    Container.style.display = 'none';
    isClicked = true;
  }
  
}




/*==============================CODE PAYSTACK PAYMENT GATE WAY====================================*/



/*==============================PAYSTACK PAYMENT FOR BOX A ================================*/


const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack(e) {
  e.preventDefault();

  let handler = PaystackPop.setup({
    key: 'pk_test_5fa5ee06617d682d9504f3d45532c9d4d96299f9', // Replace with your public key
    email: document.getElementById("email-address").value,
    amount: '5000',
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Transaction was not completed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
      window.location.href='boxA.html';
    }
  });

  handler.openIframe();
}


/*==============================PAYSTACK PAYMENT FOR BOX B ================================*/

const paymentForm2 = document.getElementById('paymentForm2');
paymentForm2.addEventListener("submit", payWithPaystack2, false);
function payWithPaystack2(e) {
  e.preventDefault();

  let handler = PaystackPop.setup({
    key: 'pk_test_5fa5ee06617d682d9504f3d45532c9d4d96299f9', // Replace with your public key
    email: document.getElementById("email-address2").value,
    amount: '10000',
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Transaction was not completed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
      window.location.href='boxB.html';
    }
  });

  handler.openIframe();
}



/*==============================PAYSTACK PAYMENT FOR BOX C ================================*/

const paymentForm3 = document.getElementById('paymentForm3');
paymentForm3.addEventListener("submit", payWithPaystack3, false);
function payWithPaystack3(e) {
  e.preventDefault();

  let handler = PaystackPop.setup({
    key: 'pk_test_5fa5ee06617d682d9504f3d45532c9d4d96299f9', // Replace with your public key
    email: document.getElementById("email-address3").value,
    amount: '20000',
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Transaction was not completed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
      window.location.href='boxC.html';
    }
  });

  handler.openIframe();
}


/*==============================PAYSTACK PAYMENT FOR BOX D ================================*/


const paymentForm4 = document.getElementById('paymentForm4');
paymentForm4.addEventListener("submit", payWithPaystack4, false);
function payWithPaystack4(e) {
  e.preventDefault();

  let handler = PaystackPop.setup({
    key: 'pk_test_5fa5ee06617d682d9504f3d45532c9d4d96299f9', // Replace with your public key
    email: document.getElementById("email-address4").value,
    amount: '50000',
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Transaction was not completed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
      window.location.href='boxD.html';
    }
  });

  handler.openIframe();
}





/*==============================PICTURE CHANGE ONCLICK CODE================================*/



