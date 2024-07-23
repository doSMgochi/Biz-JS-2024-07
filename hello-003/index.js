import {
  addNation,
  arrays,
  multiArrays,
  viewNations,
  addNums,
  expoNum,
} from "./arrays.js";

import objView from "./json.js";

arrays();
multiArrays();

addNation("대한민국");
addNation("미국");
addNation("영국");
addNation("프랑스");

viewNations();
addNums();
expoNum();

objView();
