export function createTagElement<T extends HTMLElement>(tag: string, attr?: {}) {
  const el = document.createElement(tag);
  for (const attrKey in attr) {
    if (attr.hasOwnProperty(attrKey)) {
      if (el.hasAttribute(attrKey)) {
        el.setAttribute(attrKey, attr[attrKey]);
      } else {
        console.error(`the ${tag} element attribute error: ${attrKey}`);
      }
    }
  }
  return el as T;
}
