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