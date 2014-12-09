$(document).ready(function() {

  var cartrade;

  cartrade = {
    min: 100000,
    max: 2100000,
    totalRange: 2000000,
    startPos: 0,
    endPos: 198,
    unit: 100000
  }

  onePixelValue = (cartrade.endPos * cartrade.totalRange/100)


	$( ".dropdownToggle").on( "click", function(e) {
	  	$(".dropdown").removeClass('active');
	  	$(this).parent().addClass('active');
	});

	$(".rangeMeter").noUiSlider({
		start: [ 20, 80 ],
		margin: 10,
		range: {
			'min': 0,
			'max': 100
		}
	});

	$(".noUi-origin").last().css({background: "#fff", border: "none"});

	$(".rangeMeter").on("slide",function(e){
    displayAmountText()

	});

  function displayAmountText(){
    range = convertPositionToAmount()
    amountText = "Rs. "+rsInText(range.startText)+" to "+rsInText(range.endText)
    $(".budgetRange").text(amountText);
  }

  function rsInText(rs){
    return rs.toFixed(2)+" lacs"
  }

  function convertPositionToAmount(){
    start = $(".noUi-origin").first().position().left;
    end = $(".noUi-origin").last().position().left;
    startValue = (onePixelValue * start + cartrade.min);
    endValue = (onePixelValue * end + cartrade.min);
    startText = calculateRsInLac(startValue);
    endText = calculateRsInLac(endValue);
    return {startText: startText, endText: endText}
  }

  function calculateRsInLac (value) {
    return ((value * cartrade.totalRange/100)/cartrade.unit)/1000000;
  }

});