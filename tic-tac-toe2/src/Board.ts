import { BoardType } from "./models/BoardType";
import { Cell } from "./models/Cell";
import { PlayerSymbol } from "./models/PlayerSymbol";
import { PlayerType } from "./models/PlayerType";

type CellStatus = PlayerSymbol | null | -1;

export class Board implements BoardType {
    size: number;
    cells: Cell[][];
    rowMap: CellStatus[];
    rowMapCount: number[];
    colMaP: CellStatus[];
    colMaPCount: number[];
    primaryDiagonalMap: CellStatus;
    primaryDiagonalMapCount: number;
    secondaryDiagonalMap: CellStatus;
    secondaryDiagonalMapCount: number;
    cellCount: number;
    
    constructor ( size: number ) {
        this.size = size;
        this.initializeCells();
    }

    private initializeCells () {
        this.cells = new Array(this.size).fill(0).map(() => new Array(this.size));

        this.rowMap = new Array(this.size).fill(null);
        this.rowMapCount = new Array(this.size).fill(0);
        this.colMaP = new Array(this.size).fill(null);
        this.colMaPCount = new Array(this.size).fill(0);
        this.primaryDiagonalMap = null;
        this.primaryDiagonalMapCount = 0;
        this.secondaryDiagonalMap = null;
        this.secondaryDiagonalMapCount = 0;
        this.cellCount = 0;
    }

    private isCellEmpty ( row: number, col: number ): boolean {
        return this.cells[row][col] === null;
    }

    fillCell ( row: number, col: number, player: PlayerType ): boolean {
        if ( !this.isCellEmpty(row, col) ) {
            return false;
        }
        this.cells[row][col].symbol = player.symbol;
        this.cellCount++;
        this.updateWinMaps(row, col, player);
        return true;
    }

    public checkWinCondition ( row: number, col: number ) {
        // Win
        if ( this.rowMapCount[row] === this.size ) return true;
        if ( this.colMaPCount[col] === this.size ) return true;
        if ( row === col && this.primaryDiagonalMap === this.size ) return true;
        if ( row + col === this.size && this.secondaryDiagonalMap === this.size ) return true;

        // Tie
        if ( this.cellCount === this.size * this.size ) return null;

        return false;
    }

    private updateWinMaps ( row: number, col: number, player: PlayerType ) {
        if ( this.rowMap[row] === null ) {
            this.rowMap[row] = player.symbol;
            this.rowMapCount[row] = 1;
        } else if ( this.rowMap[row] !== player.symbol ) {
            this.rowMap[row] = -1;
            this.rowMapCount[row] = -1;
        } else {
            this.rowMapCount[row]++;
        }

        if ( this.colMaP[col] === null ) {
            this.colMaP[col] = player.symbol;
            this.colMaPCount[col] = 1;
        } else if ( this.colMaP[col] !== player.symbol ) {
            this.colMaP[col] = -1;
            this.colMaPCount[row] = -1;
        } else {
            this.colMaPCount[col]++;
        }

        if ( row === col ) {
            if ( this.primaryDiagonalMap === null ) {
                this.primaryDiagonalMap = player.symbol;
                this.primaryDiagonalMapCount = 1;
            } else if ( this.primaryDiagonalMap !== player.symbol ) {
                this.primaryDiagonalMap = -1;
                this.primaryDiagonalMapCount = -1;
            } else {
                this.primaryDiagonalMapCount++;
            }
        }

        if ( row + col === this.size ) {
            if ( this.secondaryDiagonalMap === null ) {
                this.secondaryDiagonalMap = player.symbol;
                this.secondaryDiagonalMapCount = 1;
            } else if ( this.secondaryDiagonalMap !== player.symbol ) {
                this.secondaryDiagonalMap = -1;
                this.secondaryDiagonalMapCount = -1;
            } else {
                this.secondaryDiagonalMapCount++;
            }
        }
    }

    resetBoard() {
        this.initializeCells();
    }
}

// 00 01 02 03 04 05
// 10 11 12 13 14 15
// 20 21 22 23 24 25
// 30 31 32 33 34 35
// 40 41 42 43 44 45
// 50 51 52 53 54 55