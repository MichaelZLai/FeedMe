$(".submit").on("click", () => {
  const searchTerm = $("#restaurant-search").val()
  const apiUrl = "http://localhost:3000/"
  $("#movie-select").empty().append(`<option>Movies matching... ${searchTerm}</option>`)

  $.ajax({
    type: "GET",
    url: apiUrl,
    dataType: "json"
  }).done((response) => {
    console.log("success")
