// import { generateImage as generateListItem } from "./modules/general.js";
// import { generateList } from "./modules/list.js";
// import { generateItem } from "./modules/list.js";
// import { generateTable as generateTableItem } from "./modules/table.js";
// import { generateItem } from "./modules/table.js";
import { generateTableRow } from "./modules/table.js";

import * as List from "./modules/list.js";
import * as Table from "./modules/table.js";

let ul = generateList(document.body);
generateListItem(ul, "images/pexels-eberhard-grossgasteiger-1366913.jpg/");

let table = generateTable(document.body);
generateTableRow(table);
generateTableItem(tr, "images/");
