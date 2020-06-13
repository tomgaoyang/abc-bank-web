/*
 * jQuery Superfish Menu Plugin
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */

$(function() {
  //    alert( 'JavaScript Loaded!')
  $(".field--name-field-user-validation").addClass("selected");
  $(".selected").hide();
  var user = $("h1.page-title").html()
  // console.log("User = " + user)
  var url = 'https://0n2ravix4f.execute-api.ap-northeast-2.amazonaws.com/risk?name=' + user
  $("img").click(function() {
    fetch(url).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log('data = ' + data[1]);
      if(data[1] == '0'){
        $(".field--name-field-user-validation").find(".field__item").html("通过审核 放贷成功");
        $(".field--name-field-user-validation").find(".field__item").css("color", "#3352FF");

      } else {
        $(".field--name-field-user-validation").find(".field__item").html("未通过审核");
        $(".field--name-field-user-validation").find(".field__item").css("color", "#e33e33");
      }
    }).catch(function() {
      console.log("Booo");
    });
    $(".selected").delay(500).show(0);

    $(".field__item").find('img').hide();
  });
});
