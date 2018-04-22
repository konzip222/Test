/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function() {
  $("#start").html("Go!");
  $(".hidden").hide();
  $("a").attr("href", "http://www.jquery.com");
  var val = $("a").attr("href");
  alert($("#name").val());
  alert(val);
});