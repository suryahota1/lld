import { Cell } from "./Cell";
import { PlayerType } from "./PlayerType";

export interface BoardType {
    size: number;
    cells: Cell[][];
    fillCell: (row: number, col: number, player: PlayerType) => boolean;
    resetBoard: () => void;
    checkWinCondition: ( row: number, col: number ) => boolean | null;
}