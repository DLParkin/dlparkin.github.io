import React, { useState, useEffect } from "react";
import ReactReplView from "./ReactReplView";
import useReactReplJS from "./useReactReplJS";
import prettyFormat from "pretty-format";

const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
function scopeEval(scope, script) {
  // So we could but a little out of scope for what we are doing
  script = script
    .trim()
    .replace(/^var /, "")
    .replace(/^let /, "")
    .replace(/^const /, "");

  return AsyncFunction("return (" + script + ")")();
}

const scopeEval2 = (scope, script) => {
  const array = script.split("\n");
  const findResults = array.filter((element) =>
    element.includes("// expected output:")
  );
  const cleanUpResults = findResults.map((found) => {
    return found
      .replace("// expected output:", "")
      .replaceAll("\r", "")
      .replaceAll("\\", "")
      .replaceAll('"', "")
      .trim();
  });
  return cleanUpResults;
};

async function execAndGetLine(execLine, manualInput) {
  if (!execLine.trim()) return [];
  try {
    if (manualInput) {
      const evalOutput = await scopeEval(window, execLine);
      return { type: "output", value: prettyFormat(evalOutput) };
    } else {
      const evalOutput = await scopeEval2(window, execLine);
      return { type: "output", value: prettyFormat(evalOutput) };
    }
  } catch (e) {
    return { type: "error", value: e };
  }
}

export const ReactReplJS = ({
  title,
  tabs,
  selectedTab,
  onChangeTab,
  initialLines = [],
  initiallyExecute = [],
  height,
  submitCodeRef = null,
}) => {
  const [lines, setLines] = useState(initialLines);

  const onSubmit = async (execLine) => {
    const newLines = lines.concat([{ type: "input", value: execLine }]);
    if (!execLine.trim()) return;
    setLines(newLines.concat([await execAndGetLine(execLine, true)]));
  };

  if (submitCodeRef) submitCodeRef.current = onSubmit;

  useEffect(() => {
    (async () => {
      if (initiallyExecute.length === 0) return;
      const lines = [];
      for (const execLine of initiallyExecute) {
        // lines.push({ type: "input", value: execLine });
        if (!execLine.trim()) continue;
        lines.push(await execAndGetLine(execLine));
      }
      setLines(lines);
    })();
  }, [initiallyExecute]);

  return (
    <ReactReplView
      title={title}
      tabs={tabs || ["Javascript"]}
      selectedTab={selectedTab || "Javascript"}
      onChangeTab={onChangeTab}
      onSubmit={onSubmit}
      height={height}
      lines={lines}
      onClear={() => setLines([])}
    />
  );
};

export { ReactReplView, useReactReplJS };

export default ReactReplJS;
