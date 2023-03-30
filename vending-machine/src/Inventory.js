import Slot from "./Slot";

export default class Inventory {

    slots;
    emptySlotNum;

    constructor ( slotNum ) {
        this.slots = new Array(slotNum);
        this.slots.forEach(( val, idx ) => {
            this.slots[idx] = new Slot(idx);
        });
        this.emptySlotNum = 0;
    }


}