function hideWhenClicked(event) {
  console.log("In hideWhenClicked")
  $(event.target).hide()
}

$('#hide_this').click(hideWhenClicked);
