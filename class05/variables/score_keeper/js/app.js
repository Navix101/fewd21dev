var total = 0;

$( document ).ready(function() {

 	 $('#add5').click(add5);
 	 $('#add10').click(add10);
 	 $('#sub1').click(sub1);
 	 $('#zero').click(zero);

    function add5(){
    	total = total + 5;
    	$('#result').html(total);
    }
    function add10(){
    	total = total + 10;
    	$('#result').html(total);
    }
    function sub1(){
    	total = total - 1;
    	$('#result').html(total);
    }
    function zero(){
    	total = 0;
    	$('#result').html(total);
    }

});