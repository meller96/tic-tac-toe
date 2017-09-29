class TicTacToe { 
constructor() { 
this._current = true; 
this._field = []; 
for (var i=0;i<3;i++) 
{ 
this._field[i] = []; 
for (var j=0;j<3;j++) 
this._field[i][j] = null; 
} 
} 

getCurrentPlayerSymbol() { 
if (this._current == true) 
return 'x'; 
else 
return 'o'; 
} 

nextTurn(rowIndex, columnIndex) { 
console.log(rowIndex, columnIndex, this.getCurrentPlayerSymbol()); 
if (this._field[rowIndex][columnIndex] == null) 
{ 
this._field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol(); 
this._current = !this._current; 
this.print(); 
} 
} 

isRowWin() 
{ 
for (var i=0;i<3;i++) 
{ 
var temp = this._field[i][0]; 
var flag = true; 
for (var j=1;j<3;j++) 
if (this._field[i][j] != temp) 
{ 
flag = false; 
break; 
} 
if (flag == true && temp!=null) 
{ 
console.log("row"); 
return temp; 
} 
} 
return null; 
} 

isColumnWin() 
{ 
for (var i=0;i<3;i++) 
{ 
var temp = this._field[0][i]; 
var flag = true; 
for (var j=1;j<3;j++) 
if (this._field[j][i] != temp) 
{ 
flag = false; 
break; 
} 
if (flag == true && temp!=null) 
{ 
console.log("col"); 
return temp; 
} 
} 
return null; 
} 

isDiagWin() 
{ 
var temp1 = this._field[0][0]; 
var temp2 = this._field[2][0]; 
var flag1 = true; 
var flag2 = true; 
for (var i=1;i<3;i++) 
{ 
if (this._field[i][i] != temp1) 
{ 
flag1 = false; 
} 
if (this._field[2 - i][i] != temp2) 
{ 
flag2 = false; 
} 
} 
if (flag1 == true && temp1!=null) 
{ 
console.log("maindiag"); 
return temp1; 
} 
if (flag2 == true && temp2!=null) 
{ 
console.log("notmaindiag"); 
return temp2; 
} 
return null; 
} 

print() 
{ 
for (var i=0;i<3;i++) 
{ 
console.log(this._field[i][0], this._field[i][1], this._field[i][2]); 
} 
console.log('------'); 
} 

isFinished() { 
if (this.noMoreTurns() == true) 
return true; 
if (this.isRowWin() == null && this.isColumnWin() == null && this.isDiagWin() == null) 
return false; 
return true; 
} 

getWinner() { 
var winner = this.isColumnWin(); 
if (winner != null) 
return winner; 
winner = this.isRowWin(); 
if (winner != null) 
return winner; 
winner = this.isDiagWin(); 
if (winner != null) 
return winner; 
return null; 
} 

noMoreTurns() { 
for (var i=0;i<3;i++) 
{ 
for (var j=0;j<3;j++) 
if (this._field[i][j] == null) 
return false; 
} 
return true; 
} 

isDraw() { 
return (this.noMoreTurns() == true && this.getWinner() == null); 
} 

getFieldValue(rowIndex, colIndex) { 
return this._field[rowIndex][colIndex]; 
} 
} 

module.exports = TicTacToe;