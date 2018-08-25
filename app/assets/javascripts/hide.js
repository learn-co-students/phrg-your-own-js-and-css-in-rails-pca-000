// function hideWhenClicked(event) {
//   $( "#hide_this" ).click(function( event.this ) {
//     event.preventDefault();
//     $( this ).hide();
//   });
// }
// $('#hide_this').click(hideWhenClicked);

// function hideWhenClicked(event) {
//   var $target = $(event.target);
//   $target.hide();
// }
//
// $('#hide_this').click(hideWhenClicked);

  // document.getElementById('#hide_this').style.display = 'none';

  function hideWhenClicked(event) {
    // debugger
    const $target = $(event.target);
    $target.hide();
  }

  $('#hide_this').click(hideWhenClicked);
