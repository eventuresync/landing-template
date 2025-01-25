import { parseDocument } from "htmlparser2";

export const htmlToRichText = (html: string) => {
  const document = parseDocument(html);
  const content = [];

  const traverseNode = (node: any) => {
    if (node.type === "text") {
      return {
        nodeType: "text",
        value: node.data,
        marks: [],
        data: {}, // Agregamos "data" vacío aquí
      };
    } else if (node.type === "tag") {
      if (node.name === "p") {
        return {
          nodeType: "paragraph",
          content: node.children.map(traverseNode).filter(Boolean),
          data: {}, // Agregamos "data" vacío aquí
        };
      } else if (node.name === "strong") {
        return {
          nodeType: "text",
          value: node.children[0]?.data || "",
          marks: [{ type: "bold" }],
          data: {}, // Agregamos "data" vacío aquí
        };
      } else if (node.name === "em" || node.name === "i") {
        return {
          nodeType: "text",
          value: node.children[0]?.data || "",
          marks: [{ type: "italic" }],
          data: {}, // Agregamos "data" vacío aquí
        };
      } else if (node.name === "ul") {
        return {
          nodeType: "unordered-list",
          content: node.children.map(traverseNode).filter(Boolean),
          data: {}, // Agregamos "data" vacío aquí
        };
      } else if (node.name === "ol") {
        return {
          nodeType: "ordered-list",
          content: node.children.map(traverseNode).filter(Boolean),
          data: {}, // Agregamos "data" vacío aquí
        };
      } else if (node.name === "li") {
        return {
          nodeType: "list-item",
          content: node.children.map(traverseNode).filter(Boolean),
          data: {}, // Agregamos "data" vacío aquí
        };
      }
    }
    return null;
  };

  for (const child of document.children) {
    const parsedNode = traverseNode(child);
    if (parsedNode) content.push(parsedNode);
  }

  return {
    nodeType: "document",
    data: {}, // "data" también es requerido en el documento principal
    content,
  };
};
