class TicTacToe {
    constructor() {
        this.current = 'x';
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }

    getCurrentPlayerSymbol() {
        return this.current;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.field[rowIndex][columnIndex] == null){
            this.field[rowIndex][columnIndex] = this.current;        
            if(this.current == 'x') 
                this.current = 'o';
            else
                this.current = 'x';
        }
    }

    isFinished() {
        if(this.getWinner()!=null || this.isDraw())
            return true;
        return false;
    }

    getWinner() {
        let rowX="";
        let rowO="";
        let colX="";
        let colO="";
        //ищем победителя в строке или в столбце
        for(let i=0; i<this.field.length; ++i){
            for (let j=0; j<this.field.length; ++j){
                if(this.field[i][j] == "x")
                    rowX+=this.field[i][j];
                else
                    rowO+=this.field[i][j];
               
                if(this.field[j][i] == "x")
                    colX+=this.field[j][i];
                else
                    colO+=this.field[j][i];
                
            }
            if(rowX=="xxx" || colX=="xxx")
                return "x";
            if(rowO=="ooo" || colO=="ooo")
                return "o"; 
            rowX="";
            rowO="";
            colX="";
            colO="";
        }
        //главная диагональ
        let digX1="";
        let digO1="";
        //побочная диагональ
        let digX2="";
        let digO2="";

        for(let i=0; i<this.field.length; ++i){
            if(this.field[i][i] == "x")
                digX1+=this.field[i][i];
            else
                digO1+=this.field[i][i];
       
            if(this.field[2-i][i] == "x")
                digX2+=this.field[2-i][i];
            else
                digO2+=this.field[2-i][i];
        }
        if(digX1=="xxx" || digX2=="xxx")
            return "x";
        if(digO1=="ooo" || digO2=="ooo")
            return "o"; 
        
        return null;
    }

    noMoreTurns() {
        for(let i=0; i<this.field.length; ++i){
            for (let j=0; j<this.field.length; ++j){
                //как только нашел пустое поле верни false
                if(!this.field[i][j])
                    return false;
            }
        }
        return true;
    }

    isDraw() {
        if(this.noMoreTurns() && !this.getWinner())
            return true;
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}


module.exports = TicTacToe;
