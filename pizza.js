/* PacoTiger's Powerfull.
                                ___..........__
           _,...._           _."'_,.++8n.n8898n.`"._        _....._
         .'       `".     _.'_.'" _.98n.68n. `"88n. `'.   ,"       `.
        /        .   `. ,'. "  -'" __.68`""'""=._`+8.  `.'     .     `.
       .       `   .   `.   ,d86+889" 8"""+898n, j8 9 ,"    .          \
      :     '       .,   ,d"'"   _..d88b..__ `"868' .'  . '            :
      :     .      .    _    ,n8""88":8"888."8.  "               '     :
       \     , '  , . .88" ,8P'     ,d8. _   `"8n  `+.      `.   .     '
        `.  .. .     d89' "  _..n689+^'8n88n.._ `+  . `  .  , '      ,'
          `.  . , '  8'    .d88+"    j:""' `886n.    b`.  ' .' .   ."
           '       , .j            ,d'8.         `  ."8.`.   `.  ':
            .    .' n8    ,_      .f A 6.      ,..    `8b, '.   .'_
          .' _    ,88'   :8"8    6'.d`i.`b.   d8"8     688.  ".    `'
        ," .88  .d868  _         ,9:' `8.`8   "'  ` _  8+""      b   `,
      _.  d8P  d'  .d :88.     .8'`j   ;+. "     n888b 8  .     ,88.   .
     `   :68' ,8   88     `.   '   :   l `     .'   `" jb  .`   688b.   ',
    .'  .688  6P   98  =+""`.      `   '       ,-"`+"'+88b 'b.  8689  `   '
   ;  .'"888 .8;  ."+b. : `" ;               .: "' ; ,n  `8 q8, '88:       \
   .   . 898  8:  :    `.`--"8.              d8`--' '   .d'  ;8  898        '
  ,      689  9:  8._       ,68 .        .  :89    ..n88+'   89  689,' `     .
  :     ,88'  88  `+88n  -   . .           .        " _.     6:  `868     '   '
  , '  .68h.  68      `"    . . .        .  . .             ,8'   8P'      .   .
  .      '88  'q.    _.f       .          .  .    '  .._,. .8"   .889        ,
 .'     `898   _8hnd8p'  ,  . ..           . .    ._   `89,8P    j"'  _   `
  \  `   .88, `q9868' ,9      ..           . .  .   8n .8 d8'   +'   n8. ,  '
  ,'    ,+"88n  `"8 .8'     . ..           . .       `8688P"   9'  ,d868'   .  .
  .      . `86b.    " .       .            ..          68'      _.698689;      :
   . '     ,889_.n8. ,  ` .   .___      ___.     .n"  `86n8b._  `8988'b      .,6
    '       q8689'`68.   . `  `:. `.__,' .:'  ,   +   +88 `"688n  `q8 q8.     88
    , .   '  "     `+8 n    .   `:.    .;'   . '    . ,89           "  `q,    `8
   .   .   ,        .    + c  ,   `:.,:"        , "   d8'               d8.    :
    . '  8n           ` , .         ::    . ' "  .  .68h.             .8'`8`.  6
     ,    8b.__. ,  .n8688b., .    .;:._     .___nn898868n.         n868b "`   8
      `.  `6889868n8898886888688898"' "+89n88898868868889'         688898b    .8
       :    q68   `""+8688898P ` " ' . ` '  ' `+688988P"          d8+8P'  `. .d8
       ,     88b.       `+88.     `   ` '     .889"'           ,.88'        .,88
        :    '988b        "88b.._  ,_      . n8p'           .d8"'      '     689
        '.     "888n._,      `"8"+88888n.8,88:`8 .     _ .n88P'   .  `      ;88'
         :8.     "q888.  .            "+888P"  "+888n,8n8'"      .  .     ,d986
         :.`8:     `88986                          `q8"           ,      :688"
         ;.  '8,      "88b .d                        '                  ,889'
         :..   `6n      '8988                                         b.89p
         :. .    '8.      `88b                                        988'
         :. .      8b       `q8.        '                     . '   .d89      '
         . .        `8:       `86n,.       " . ,        , "        ,98P      ,
         .. .         '6n.       +86b.        .      .         _,.n88'     .
           .            `"8b.      'q98n.        ,     .  _..n868688'          .
          ' . .            `"98.     `8868.       .  _.n688868898p"            d
           . .                '88.      "688.       q89888688868"            ,86
            '. .                 88.     `8898        " .889"'              .988
*/
// Write your Pizza Builder JavaScript in this file.
var pricepep = 0;
var pricemus = 0;
var pricegre = 0;
var pricecru = 0;
var pricesau = 0;
var cheese = 10;
var suma = pricepep + pricemus + pricegre + pricecru + pricesau + cheese;

$(document).on("ready", function() {
	$(".pep, .green-pepper, .mushroom div").hide(); 
	$(".sauce-white").removeClass("sauce-white");
	$(".crust-gluten-free").removeClass("crust-gluten-free");
	$("strong").text("$" + suma);
	//DISABLE BUTTON EFFECTS
	$(".btn-pepperonni").removeClass("active");
	$(".btn-mushrooms").removeClass("active");
	$(".btn-green-peppers").removeClass("active");
	$(".btn-sauce").removeClass("active");
	$(".btn-crust").removeClass("active");  
	$("aside ul li").hide();  //hide list's price

	
});
//Add and remove Pepperoni
$(".btn-pepperonni").on("click", function() {
	$(".pep").slideToggle();
	$(".btn-pepperonni").toggleClass("active");
	pricepep += 1;
	suma = pricepep + pricemus + pricegre + pricecru + pricesau + cheese;
	$("strong").text("$" + suma);
	if (pricepep === 2) {
        pricepep = 0;
        suma = pricepep + pricemus + pricegre + pricecru + pricesau + cheese;
        $("strong").text("$" + suma);
	}	
	//Update list price
	$("aside ul li:nth-child(1)").toggle(); //Update list price peperronis
});	
//Add and remove Mushrooms
$(".btn-mushrooms").on("click", function() {
    $(".mushroom div").fadeToggle();
	$(".btn-mushrooms").toggleClass("active");
	pricemus += 1;
	suma = pricepep + pricemus + pricegre + pricecru + pricesau + cheese;
	$("strong").text("$" + suma);
	if (pricemus === 2) {
        pricemus = 0;
        suma = pricepep + pricemus + pricegre + pricecru + pricesau + cheese;
        $("strong").text("$" + suma);
	}
	$("aside ul li:nth-child(2)").toggle();  //Update list price MushRooms
});
//Add and remove Green Peppers
$(".btn-green-peppers").on("click", function() {
	$(".green-pepper").slideToggle();
	$(".btn-green-peppers").toggleClass("active");
	pricegre += 1;
	suma = pricepep + pricemus + pricegre + pricecru + pricesau + cheese;
	$("strong").text("$" + suma);
	if (pricegre === 2) {
        pricegre = 0;
        suma = pricepep + pricemus + pricegre + pricecru + pricesau + cheese;
        $("strong").text("$" + suma);
	}
	$("aside ul li:nth-child(3)").toggle();   //Update list price Green Peppers
});
//Add and remove Crust Gluten free
$(".btn-crust").on("click", function () {
	$(".crust").toggleClass("crust-gluten-free");
	$(".btn-crust").toggleClass("active");
	pricecru += 5;
	suma = pricepep + pricemus + pricegre + pricecru + pricesau + cheese;
	$("strong").text("$" + suma);
	if (pricecru > 5) {
        pricecru = 0;
        suma = pricepep + pricemus + pricegre + pricecru + pricesau + cheese;
        $("strong").text("$" + suma);
	}
	$("aside ul li:nth-child(5)").toggle();     //Update list price crust
});
//Add and remove Sauce White
$(".btn-sauce").on("click", function () {
	$(".sauce").toggleClass("sauce-white");
	$(".btn-sauce").toggleClass("active");
	pricesau += 3;
	suma = pricepep + pricemus + pricegre + pricecru + pricesau + cheese;
	$("strong").text("$" + suma);
	if (pricesau > 3) {
        pricesau = 0;
        suma = pricepep + pricemus + pricegre + pricecru + pricesau + cheese;
        $("strong").text("$" + suma);
	}
	$("aside ul li:nth-child(4)").toggle();     //Update list price Sauce White
});

