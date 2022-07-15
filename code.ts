
function detectSelection(node) {
  console.log("node: ", node);
  console.log("subnode: ", node[0]);
  console.log("subnode parent: ", node[0].parent);
  console.log("subnode children: ", node[0].children);
  console.log("subnode type: ", node[0].type);
}

let selection = figma.currentPage.selection;
detectSelection(selection);

figma.closePlugin();
