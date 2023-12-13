import { arrays } from "./array";
import { arraysBuffer } from "./arraysbuffer";
import { atomics } from "./atomics";
import { bigInts } from "./bigint";
import { boolean } from "./boolean";
import { classes } from "./classes";
import { dataview } from "./dataview";
import { dates } from "./date";

// Maybe expand it maybe not meh will see
export const JSExamples = [
  { name: " Array", files: arrays },
  { name: " Array Buffer", files: arraysBuffer },
  {
    name: " Atomics",
    files: atomics,
  },
  {
    name: " Big Int",
    files: bigInts,
  },
  {
    name: " Boolean",
    files: boolean,
  },
  {
    name: " Classes",
    files: classes,
  },
  {
    name: " Dateview",
    files: dataview,
  },
  {
    name: " Date",
    files: dates,
  },
];
