// Första: Typ av element man vill skapa
// Andra: Textinnehåll i elementet
// Tredje: Elementets ID
// Fjärde: Elementets klass eller klasser
// Femte: Det element man vill göra till föräldraelement

// Vill man inte ha något av dem anger man bara null istället

export function createNewElement(elementType, text, id, classes, parent) {
   const element = document.createElement(elementType);
   element.innerText = text;

   if (id) {
      element.id = id;
   }

   if (classes) {
      element.classList = classes;
   }

   if (parent) {
      parent.appendChild(element);
   }
   return element;
}