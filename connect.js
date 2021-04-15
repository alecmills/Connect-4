//The varible x will be used to keep track of player turns.
var x = 1; 
var turn = 1;
// These variables will be used inside the array.
var rows = 6;
var cols = 7;

/*The varible y will be used for allowing the functions to only process through one time. Not allowing to change the color
of a position more than once and or trying to update the array in the same position as previously updated.*/
 let v1 = false;  let v2 = false;  let v3 = false; let  v4 = false;  let v5 = false;  let v6 = false;  let v7 = false; 
 let v8 = false;  let v9 = false; let v10 = false; let v11 = false; let v12 = false; let v13 = false; let v14 = false;
let v15 = false; let v16 = false; let v17 = false; let v18 = false; let v19 = false; let v20 = false; let v21 = false;
let v22 = false; let v23 = false; let v24 = false; let v25 = false; let v26 = false; let v27 = false; let v28 = false;
let v29 = false; let v30 = false; let v31 = false; let v32 = false; let v33 = false; let v34 = false; let v35 = false;
let v36 = false; let v37 = false; let v38 = false; let v39 = false; let v40 = false; let v41 = false; let v42 = false;

/*This is my attempt at making the 2D array. This array will be updated through the color functions and will be used by the check
function so see if a player has won the game.
*/
var field = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0]
]
//field[1][1]= 2;
//console.log(field[1][1]);


/*this Grouping is for being able to change the marker based on player turn.
In each turn the color will be changed and change the varible x to the next players turn,
then will update the array field and fill it with an (a) for team 1 and a (b) for team two.*/
  //Top Row 1
let btnR1C1 = document.querySelector("#r1c1").onclick = function() {color1()};
function color1() {
  if(v8 == true){
      if(v1 == false){
        if((x%2) != 0){
          document.querySelector("#r1c1").style.backgroundColor = "#335"; 
          x++; 
          field[0][0]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r1c1").style.backgroundColor = "#957"; 
          x++; 
          field[0][0]= 1;
        }
        v1 = true;
        win(0,0);
      }}}
let btnR1C2 = document.querySelector("#r1c2").onclick = function() {color2()};
function color2() {
  if(v9 == true){
      if(v2 == false){
        if((x%2) != 0){
          document.querySelector("#r1c2").style.backgroundColor = "#335";
          x++; 
          field[0][1]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r1c2").style.backgroundColor = "#957"; 
          x++; 
          field[0][1]= 2;
        }
        v2 = true;
        win(0,1);
      }}}
let btnR1C3 = document.querySelector("#r1c3").onclick = function() {color3()};
function color3() {
   if(v10 == true){
      if(v3 == false){
        if((x%2) != 0){
          document.querySelector("#r1c3").style.backgroundColor = "#335"; 
          x++; 
          field[0][2]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r1c3").style.backgroundColor = "#957"; 
          x++; 
          field[0][2]= 1;
        }
        v3 = true;
        win(0,2);
      }}}
let btnR1C4 = document.querySelector("#r1c4").onclick = function() {color4()};
function color4() {
  if(v11 == true){
      if(v4 == false){ 
        if((x%2) != 0){
          document.querySelector("#r1c4").style.backgroundColor = "#335";
          x++;
          field[0][3]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r1c4").style.backgroundColor = "#957";
          x++;
          field[0][3]= 1;}
        v4 = true;
        win(0,3);
      }}}
let btnR1C5 = document.querySelector("#r1c5").onclick = function() {color5()};
function color5() {
  if(v12 == true){
      if(v5 == false){
        if((x%2) != 0){
          document.querySelector("#r1c5").style.backgroundColor = "#335";
          x++;
          field[0][4]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r1c5").style.backgroundColor = "#957";
          x++;
          field[0][4]= 1;
        }
        v5 = true;
        win(0,4);      
      }}}
let btnR1C6 = document.querySelector("#r1c6").onclick = function() {color6()};
function color6() {
  if(v13 == true){
    if(v6 == false){
      if((x%2) != 0){
          document.querySelector("#r1c6").style.backgroundColor = "#335";
          x++;
        field[0][5]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r1c6").style.backgroundColor = "#957";
          x++;
          field[0][5]= 1;
        }
        v6 = true;
    win(0,5);
    }}}
let btnR1C7 = document.querySelector("#r1c7").onclick = function() {color7()};
function color7() {
  if(v14 == true){
      if(v7 == false){
        if((x%2) != 0){
          document.querySelector("#r1c7").style.backgroundColor = "#335";
          x++;
          field[0][6]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r1c7").style.backgroundColor = "#957";
          x++;
          field[0][6]= 1;
        }
        v7 = true;
      win(0,6);
      }}}
  //Row 2
let btnR2C1 = document.querySelector("#r2c1").onclick = function() {color8()};
function color8() {
  if(v15 == true){
      if(v8 == false){
        if((x%2) != 0){
          document.querySelector("#r2c1").style.backgroundColor = "#335";
          x++;
          field[1][0]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r2c1").style.backgroundColor = "#957";
          x++;
          field[1][0]= 1;
        }
        v8 = true;
      win(1,0);
      }}}
let btnR2C2 = document.querySelector("#r2c2").onclick = function() {color9()};
function color9() {
  if(v16 == true){
      if(v9 == false){
        if((x%2) != 0){
          document.querySelector("#r2c2").style.backgroundColor = "#335";
          x++;
          field[1][1]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r2c2").style.backgroundColor = "#957";
          x++;
          field[1][1]= 1;
        }
        v9 = true;
      win(1,1);
      }}}
let btnR2C3 = document.querySelector("#r2c3").onclick = function() {color10()};
function color10() {
  if(v17 == true){
      if(v10 == false){
        if((x%2) != 0){
          document.querySelector("#r2c3").style.backgroundColor = "#335";
          x++;
          field[1][2]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r2c3").style.backgroundColor = "#957";
          x++;
          field[1][2]= 1;
        }
        v10 = true;
      win(1,2);
      }}}
let btnR2C4 = document.querySelector("#r2c4").onclick = function() {color11()};
function color11() {
  if(v18 == true){
      if(v11 == false){
        if((x%2) != 0){
          document.querySelector("#r2c4").style.backgroundColor = "#335";
          x++;
          field[1][3]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r2c4").style.backgroundColor = "#957";
          x++;
          field[1][3]= 1;
        }
        v11 = true;
      win(1,3);
      }}}
let btnR2C5 = document.querySelector("#r2c5").onclick = function() {color12()};
function color12() {
  if(v19 == true){
      if(v12 == false){
        if((x%2) != 0){
          document.querySelector("#r2c5").style.backgroundColor = "#335";
          x++;
          field[1][4]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r2c5").style.backgroundColor = "#957";
          x++;
          field[1][4]= 1;
        }
        v12 = true;
      win(1,4);
      }}}
let btnR2C6 = document.querySelector("#r2c6").onclick = function() {color13()};
function color13() {
  if(v20 == true){
      if(v13 == false){
        if((x%2) != 0){
          document.querySelector("#r2c6").style.backgroundColor = "#335";
          x++;
          field[1][5]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r2c6").style.backgroundColor = "#957";
          x++;
          field[1][5]= 1;
        }
        v13 = true;
      win(1,5);
      }}}
let btnR2C7 = document.querySelector("#r2c7").onclick = function() {color14()};
function color14() {
  if(v21 == true){
      if(v14 == false){
        if((x%2) != 0){
          document.querySelector("#r2c7").style.backgroundColor = "#335";
          x++;
          field[1][6]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r2c7").style.backgroundColor = "#957";
          x++;
          field[1][6]= 1;
        }
        v14 = true;
      win(1,6);
      }}}
  //Row 3
let btnR3C1 = document.querySelector("#r3c1").onclick = function() {color15()};
function color15() {
  if(v22 == true){
      if(v15 == false){
        if((x%2) != 0){
          document.querySelector("#r3c1").style.backgroundColor = "#335";
          x++;
          field[2][0]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r3c1").style.backgroundColor = "#957";
          x++;
          field[2][0]= 1;
        }
        v15 = true;
      win(2,0);
      }}}
let btnR3C2 = document.querySelector("#r3c2").onclick = function() {color16()};
function color16() {
  if(v23 == true){
      if(v16 == false){
        if((x%2) != 0){
          document.querySelector("#r3c2").style.backgroundColor = "#335";
          x++;
          field[2][1]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r3c2").style.backgroundColor = "#957";
          x++;
          field[2][1]= 1;
        }
        v16 = true;
      win(2,1);
      }}}
let btnR3C3 = document.querySelector("#r3c3").onclick = function() {color17()};
function color17() {
  if(v24== true){
      if(v17 == false){
        if((x%2) != 0){
          document.querySelector("#r3c3").style.backgroundColor = "#335";
          x++;
          field[2][2]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r3c3").style.backgroundColor = "#957";
          x++;
          field[2][2]= 1;
        }
        v17 = true;
      win(2,2);
      }}}
let btnR3C4 = document.querySelector("#r3c4").onclick = function() {color18()};
function color18() {
  if(v25 == true){
      if(v18 == false){
        if((x%2) != 0){
          document.querySelector("#r3c4").style.backgroundColor = "#335";
          x++;
          field[2][3]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r3c4").style.backgroundColor = "#957";
          x++;
          field[2][3]= 1;
        }
        v18 = true;
      win(2,3);
      }}}

let btnR3C5 = document.querySelector("#r3c5").onclick = function() {color19()};
function color19() {
  if(v26 == true){
      if(v19 == false){
        if((x%2) != 0){
          document.querySelector("#r3c5").style.backgroundColor = "#335";
          x++;
          field[2][4]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r3c5").style.backgroundColor = "#957";
          x++;
          field[2][4]= 1;
        }
        v19 = true;
      win(2,4);
      }}}
let btnR3C6 = document.querySelector("#r3c6").onclick = function() {color20()};
function color20() {
  if(v27 == true){
      if(v20 == false){
        if((x%2) != 0){
          document.querySelector("#r3c6").style.backgroundColor = "#335";
          x++;
          field[2][5]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r3c6").style.backgroundColor = "#957";
          x++;
          field[2][5]= 1;
        }
        v20 = true;
      win(2,5);
      }}}
let btnR3C7 = document.querySelector("#r3c7").onclick = function() {color21()};
function color21() {
  if(v28 == true){
    if(v21 == false){
        if((x%2) != 0){
          document.querySelector("#r3c7").style.backgroundColor = "#335";
          x++;
          field[2][6]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r3c7").style.backgroundColor = "#957";
          x++;
          field[2][6]= 1;
        }
        v21 = true;
    win(2,6);
    }}}
//Row 4
let btnR4C1 = document.querySelector("#r4c1").onclick = function() {color22()};
function color22() {
  if(v29 == true){
      if(v22 == false){
        if((x%2) != 0){
          document.querySelector("#r4c1").style.backgroundColor = "#335";
          x++;
          field[3][0]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r4c1").style.backgroundColor = "#957";
          x++;
          field[3][0]= 1;
        }
        v22 = true;
      win(3,0);
      }}}
let btnR4C2 = document.querySelector("#r4c2").onclick = function() {color23()};
function color23() {
  if(v30 == true){
      if(v23 == false){
        if((x%2) != 0){
          document.querySelector("#r4c2").style.backgroundColor = "#335";
          x++;
          field[3][1]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r4c2").style.backgroundColor = "#957";
          x++;
          field[3][1]= 1;
        }
        v23 = true;
      win(3,1);
      }}}
let btnR4C3 = document.querySelector("#r4c3").onclick = function() {color24()};
function color24() {
  if(v31 == true){
      if(v24 == false){
        if((x%2) != 0){
          document.querySelector("#r4c3").style.backgroundColor = "#335";
          x++;
          field[3][2]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r4c3").style.backgroundColor = "#957";
          x++;
          field[3][2]= 1;
        }
        v24 = true;
      win(3,2);
      }}}
let btnR4C4 = document.querySelector("#r4c4").onclick = function() {color25()};
function color25() {
  if(v32 == true){
      if(v25 == false){
        if((x%2) != 0){
          document.querySelector("#r4c4").style.backgroundColor = "#335";
          x++;                                                                                                                             field[3][3]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r4c4").style.backgroundColor = "#957";
          x++;
          field[3][3]= 1;
        }
        v25=true;
      win(3,3);
      }}}
let btnR4C5 = document.querySelector("#r4c5").onclick = function() {color26()};
function color26() {
  if(v33 == true){
      if(v26 == false){
         if((x%2) != 0){
          document.querySelector("#r4c5").style.backgroundColor = "#335";
          x++;
           field[3][4]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r4c5").style.backgroundColor = "#957";
          x++;
          field[3][4]= 1;
        }
        v26 = true
      win(3,4);
      }}}
let btnR4C6 = document.querySelector("#r4c6").onclick = function() {color27()};
function color27() {
  if(v34 == true){
      if(v27 == false){
        if((x%2) != 0){
          document.querySelector("#r4c6").style.backgroundColor = "#335";
          x++;
          field[3][5]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r4c6").style.backgroundColor = "#957";
          x++;
          field[3][5]= 1;
        }
        v27 = true;
      win(3,5);
      }}}
let btnR4C7 = document.querySelector("#r4c7").onclick = function() {color28()};
function color28() {
  if(v35 == true){
      if(v28 == false){
        if((x%2) != 0){
          document.querySelector("#r4c7").style.backgroundColor = "#335";
          x++;
          field[3][6]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r4c7").style.backgroundColor = "#957";
          x++;
          field[3][6]= 1;
        }
        v28 = true;
      win(3,6);
      }}}
//Row 5
let btnR5C1 = document.querySelector("#r5c1").onclick = function() {color29()};
function color29() {
  if(v36 == true){
      if(v29 == false){
        if((x%2) != 0){
          document.querySelector("#r5c1").style.backgroundColor = "#335";
          x++;
          field[4][0]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r5c1").style.backgroundColor = "#957";
          x++;
          field[4][0]= 1;
        }
        v29 = true;
      win(4,0);
      }}}
let btnR5C2 = document.querySelector("#r5c2").onclick = function() {color30()};
function color30() {
  if(v37 == true){
      if(v30 == false){
        if((x%2) != 0){
          document.querySelector("#r5c2").style.backgroundColor = "#335";
          x++;
          field[4][1]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r5c2").style.backgroundColor = "#957";
          x++;
          field[4][1]= 1;
        }
        v30 = true;
      win(4,1);
      }}}

let btnR5C3 = document.querySelector("#r5c3").onclick = function() {color31()};
function color31() {
  if(v38 == true){
      if(v31 == false){
        if((x%2) != 0){
          document.querySelector("#r5c3").style.backgroundColor = "#335";
          x++;
          field[4][2]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r5c3").style.backgroundColor = "#957";
          x++;
          field[4][2]= 1;
        }
        v31 = true;
      win(4,2);
      }}}   
let btnR5C4 = document.querySelector("#r5c4").onclick = function() {color32()};
function color32() {
  if(v39 == true){
      if(v32 == false){
        if((x%2) != 0){
          document.querySelector("#r5c4").style.backgroundColor = "#335";
          x++;
          field[4][3]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r5c4").style.backgroundColor = "#957";
          x++;
          field[4][3]= 1;
        }
        v32 = true;
        win(4,3);
      }}}
let btnR5C5 = document.querySelector("#r5c5").onclick = function() {color33()};
function color33() {
  if(v40 == true){
      if(v33 == false){
        if((x%2) != 0){
          document.querySelector("#r5c5").style.backgroundColor = "#335";
          x++;
          field[4][4]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r5c5").style.backgroundColor = "#957";
          x++;
          field[4][4]= 1;
        }
        v33 = true;
      win(4,4);
      }}}
let btnR5C6 = document.querySelector("#r5c6").onclick = function() {color34()};
function color34() {
  if(v41 == true){
      if(v34 == false){
        if((x%2) != 0){
          document.querySelector("#r5c6").style.backgroundColor = "#335"; 
          x++; 
          field[4][5]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r5c6").style.backgroundColor = "#957"; 
          x++; 
          field[4][5]= 1;
        }
        v34 = true;
      win(4,5);
      }}}

let btnR5C7 = document.querySelector("#r5c7").onclick = function() {color35()};
function color35() {
   if(v42 == true) 
     {
      if(v35 == false){
          if((x%2) != 0){
            document.querySelector("#r5c7").style.backgroundColor = "#335";
            x++;
            field[4][6]= 2;
          }
          else if((x%2) == 0){
            document.querySelector("#r5c7").style.backgroundColor = "#957";
            x++;
            field[4][6]= 1;
          }
          v35 = true;
      win(4,6);
      }}}
//Bottom Row 6
let btnR6C1 = document.querySelector("#r6c1").onclick = function() {color36()};
function color36() {
      if(v36 == false){
        if((x%2) != 0){
          document.querySelector("#r6c1").style.backgroundColor = "#335";
          x++;
          field[5][0]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r6c1").style.backgroundColor = "#957";
          x++;
          field[5][0]= 1;
        }
        v36 = true;
      win(5,0);
      }}
let btnR6C2 = document.querySelector("#r6c2").onclick = function() {color37()};
function color37() {
      if(v37 == false){
        if((x%2) != 0){
          document.querySelector("#r6c2").style.backgroundColor = "#335";
          x++;
          field[5][1]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r6c2").style.backgroundColor = "#957";
          x++;
          field[5][1]= 1;
        }
      v37 = true;
      win(5,1);
      }}
let btnR6C3 = document.querySelector("#r6c3").onclick = function() {color38()};
function color38() {
      if(v38 == false){
        if((x%2) != 0){
          document.querySelector("#r6c3").style.backgroundColor = "#335";
          x++;
          field[5][2]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r6c3").style.backgroundColor = "#957";
          x++;
          field[5][2]= 1;
        }
        v38 = true;
      win(5,2);
      }}
let btnR6C4 = document.querySelector("#r6c4").onclick = function() {color39()};
function color39() {
      if(v39 == false){
        if((x%2) != 0){
          document.querySelector("#r6c4").style.backgroundColor = "#335";
          x++;
          field[5][3]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r6c4").style.backgroundColor = "#957";
          x++;
          field[5][3]= 1;
        }
        v39 = true;
      win(5,3);
      }}
let btnR6C5 = document.querySelector("#r6c5").onclick = function() {color40()};
function color40() {
      if(v40 == false){
        if((x%2) != 0){
          document.querySelector("#r6c5").style.backgroundColor = "#335";
          x++;
          field[5][4]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r6c5").style.backgroundColor = "#957";
          x++;
          field[5][4]= 1;
        }
        v40 = true;
      win(5,4);
      }}
let btnR6C6 = document.querySelector("#r6c6").onclick = function() {color41()};
function color41() {
      if(v41 == false){
        if((x%2) != 0){
          document.querySelector("#r6c6").style.backgroundColor = "#335";
          x++;
          field[5][5]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r6c6").style.backgroundColor = "#957";
          x++;
          field[5][5]= 1;
        }
        v41 = true; 
        win(5,5);
      }}
let btnR6C7 = document.querySelector("#r6c7").onclick = function() {color42()};
function color42() {
      if(v42 == false){
        if((x%2) != 0){
          document.querySelector("#r6c7").style.backgroundColor = "#335";
          x++;
          field[5][6]= 2;
        }
        else if((x%2) == 0){
          document.querySelector("#r6c7").style.backgroundColor = "#957";
          x++;
          field[5][6]= 1;
        }
        v42 = true;
        win(5,6);
      }
}

//End of Grouping

//This will change the color as you hover over the button.
//this will change the color back after you leave the hover of the button.


var rows;
var cols;
var inRow=1;
function win (row,col){
  rows = row;
  cols = col;
  if(checkPlayer() == 1)
    {
      if(checkWin(rows,cols) == true)
        {
      
        alert("Player 2 has won game!");
        }
    }
  else if(checkPlayer() ==2 )
    {
        if(checkWin(rows,cols) == true)
      {
        alert("player 1 has won the game!");
      }
    }
  
}

function checkWin(row, col){
  rows = row;
  cols = col;
  if(checkDown(row,col) == true)
    {
      return true;
    }
  if(checkSide(row,col) == true)
    {
      return true;
    }
  if(checkDiagonal1(row,col) == true)
    {
      return true;
    }
  if(checkDiagonl2(row,col) == true)
    {
      return true;
    }
  else
    {
      return false;
    }
}
function checkPlayer(){
  if((x%2) == 0)
    {
      return 2;
    }
  else
    {
      return 1;
    }
}
function checkDown(row,col){
  rows= row;
  cols= col;
  inRow = 1
  if(isvalid(row+1,col) == true){
     if(field[row+1][col] == field[row][col])
    {
      inRow++;
    } 
  }
  if(isvalid(row+2,col) == true){
     if(field[row+2][col] == field[row][col])
    {
      inRow++;
    } 
  }
  if(isvalid(row+3,col) == true){
     if(field[row+3][col] == field[row][col])
    {
      inRow++;
    } 
  }
  if(inRow == 4)
    {
      return true;
    }
  else
    {
      return false;
    }
}

function checkSide(row,col){
  inRow = 1
  if(isvalid(row,col-1) == true){
     if(field[row][col-1] == field[row][col])
    {
      inRow++;
    } 
      if(isvalid(row,col-2) == true){
       if(field[row][col-2] == field[row][col])
      {
        inRow++;
      } 
    }
        if(isvalid(row,col-3) == true){
           if(field[row][col-3] == field[row][col])
          {
            inRow++;
          } 
        }
  }
    if(isvalid(row,col+1) == true){
     if(field[row][col+1] == field[row][col])
    {
      inRow++;
    } 
  }
  if(isvalid(row,col+2) == true){
     if(field[row][col+2] == field[row][col])
    {
      inRow++;
    } 
  }
  if(isvalid(row,col+3) == true){
     if(field[row][col+3] == field[row][col])
    {
      inRow++;
    } 
  }
  if(inRow == 4)
    {
      return true;
    }
  else
    {
      return false;
    }
}

function checkDiagonal1(row,col){
  inRow = 1
  if(isvalid(row-1,col-1) == true){
     if(field[row-1][col-1] == field[row][col])
    {
      inRow++;
    } 
      if(isvalid(row-2,col-2) == true){
      if(field[row-2][col-2] == field[row][col])
        {
          inRow++;
        } 
      }
          if(isvalid(row-3,col-3) == true){
           if(field[row-3][col-3] == field[row][col])
          {
            inRow++;
          } 
        }
  }
    if(isvalid(row+1,col+1) == true){
     if(field[row+1][col+1] == field[row][col])
    {
      inRow++;
    } 
  }
  if(isvalid(row+2,col+2) == true){
     if(field[row+2][col+2] == field[row][col])
    {
      inRow++;
    } 
  }
  if(isvalid(row+3,col+3) == true){
     if(field[row+3][col+3] == field[row][col])
    {
      inRow++;
    } 
  }
  if(inRow == 4)
    {
      return true;
    }
  else
    {
      return false;
    }
}
function checkDiagonl2(row,col){
  inRow = 1
  if(isvalid(row-1,col+1) == true){
     if(field[row-1][col+1] == field[row][col])
    {
      inRow++;
    } 
         if(isvalid(row-2,col+2) == true){
         if(field[row-2][col+2] == field[row][col])
            {
              inRow++;
            } 
          }
             if(isvalid(row-3,col+3) == true){
             if(field[row-3][col+3] == field[row][col])
              {
                inRow++;
              } 
            }
  }
    if(isvalid(row+1,col-1) == true){
     if(field[row+1][col-1] == field[row][col])
    {
      inRow++;
    } 
  }
  if(isvalid(row+2,col-2) == true){
     if(field[row+2][col-2] == field[row][col])
    {
      inRow++;
    } 
  }
  if(isvalid(row+3,col-3) == true){
     if(field[row+3][col-3] == field[row][col])
    {
      inRow++;
    } 
  }
  if(inRow == 4)
    {
      return true;
    }
  else
    {
      return false;
    }
}


function isvalid(row,col){
  rows = row;
  cols = col;
  if (row < 0 || col < 0 || row > 5 || col > 6){ 
        return false;
    }
  if(field[row][col] != checkPlayer()){
      return false;
    }
  else{
    return true;
  }
}


function isvalid(row,col){
  rows = row;
  cols = col;
  if (row < 0 || col < 0 || row > 5 || col > 6){ 
        return false;
    }
  if(field[row][col] != checkPlayer()){
      return false;
    }
  else{
    return true;
  }
}
//This is for a test. going to print out the array values in the console.
/*function test()
{
  for(var i = 0; i<6;i++)
    {
      for(var j = 0; j<7; j++)
        {
          console.log(field[i][j]);
        }
    }
}*/