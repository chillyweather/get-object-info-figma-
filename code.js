(()=>{var o;o=figma.currentPage.selection,console.log("node: ",o),console.log("subnode: ",o[0]),console.log("subnode parent: ",o[0].parent),console.log("subnode children: ",o[0].children),console.log("subnode type: ",o[0].type),figma.closePlugin()})();