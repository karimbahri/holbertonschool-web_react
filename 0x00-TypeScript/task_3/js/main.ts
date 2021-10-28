import { RowID, RowElement } from './interface'
import * as CRUD from './crud';

const row: RowElement = {
    firstName: 'Guilaume',
    lastName: 'Salva'
}

const newRowID: RowID = CRUD.insertRow(row);
const updateRow: RowElement = {...row, age:23};
CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);
