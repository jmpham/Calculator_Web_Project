$(document).ready(function(){
  var result = 0;
  var temp = [];
  var temp2 = [];
  var screen2 = [];
  
  //************************number function ************************
  function numbers(num){
    temp.push(num);
    screen2.push(num);
    $(".screen").html(temp);
    $(".screen2").html(screen2);
  }
  function operator(op){
    if(temp.length > 0){
      $(".screen").html(op);
      temp2.push(temp.join(''));
      temp2.push(op);
      screen2.push(op);
      $(".screen2").html(screen2);
      temp = [];
    }
  }
  //************************operator buttons ***********************
  
  $("#AC").on("click",function(){
    temp.length = 0;
    temp.push(0);
    temp2.length = 0;
    screen2.length = 0;
    $(".screen").html(temp);
    $(".screen2").html(temp);
  });
  $("#X").on("click",function(){
    operator('x');
  });
  $("#div").on("click",function(){
    operator('/');
  })
  $("#plus").on("click",function(){
    operator('+');
  })
  $("#minus").on("click",function(){
    operator('-');
  })
  $("#equal").on("click",function(){
    temp2.push(temp.join(''));
    result = parseFloat(temp2[0]);
    for(var i = 0; i < temp2.length; i++){
      console.log(temp2);
      if(temp2[i] === 'x'){
        result *= parseFloat(temp2[i + 1]);
      }
      if(temp2[i] === '/'){
        console.log('here');
        result /= parseFloat(temp2[i + 1]);
      }
      if(temp2[i] === '+'){
        result += parseFloat(temp2[i + 1]);
      }
      if(temp2[i] === '-'){
        result -= parseFloat(temp2[i + 1]);
      }
    }
    $(".screen").html(result);
    temp2 = [];
    temp = [];
    screen2 = [];
  })
  
  
  //*************************number buttons***************************
  $("#dot").on("click", function(){
    numbers('.');
  })
  $("#1").on("click", function(){
    numbers(1);
    $('#1').html('h');
  })
  $("#2").on("click", function(){
    numbers(2);
  })
  $("#3").on("click", function(){
    numbers(3);
  })
  $("#4").on("click", function(){
    numbers(4);
  })
  $("#5").on("click", function(){
    numbers(5);
  })
  $("#6").on("click", function(){
    numbers(6);
  })
  $("#7").on("click", function(){
    numbers(7);
  })
  $("#8").on("click", function(){
    numbers(8);
  })
  $("#9").on("click", function(){
    numbers(9);
  })
  $("#0").on("click", function(){
    numbers(0);
  })
  
  
})