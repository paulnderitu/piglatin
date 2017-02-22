function translatePigLatin(str){

var vowels=['a', 'e', 'i', 'o', 'u'],

   result=str.split('');

 if (vowels.includes(str.charAt(0))){

   return str+='ay';

 }else{

   for(i=0; i<str.length; i++){

     if(!vowels.includes(str[i])){

       result.push(result.shift());

     }else {

       result.push('ay');

       return result.join('');

     }

   }

 }

}

// user interface logic

$(document).ready(function() {

 $("form#pig-latin").submit(function(event) {

   event.preventDefault();

   var str = $("input#latin").val();

   var output = translatePigLatin(str);

   var number=['1','2','3','4','5','6','7','8','9','0'];

   if (!number.includes(str.charAt(0))){

     $(".first-word").text(str);

     $(".show").text(output);

     $("#result").show();

   }else {

     $(".error").text('You must enter a real word!!!');

   }

 });

});
