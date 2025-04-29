export default {
  check,
  lookup,
};

var elements;
var elementsMap;

await loadPeriodicTable();


// ****************************

async function loadPeriodicTable() {
  elements = await (await fetch("periodic-table.json")).json();
  elementsMap = elements.reduce((map, currentElement, index) => {
    map.set(currentElement.symbol.toLowerCase(), index);

    return map;
  }, new Map());
}

function check(inputWord) {
  if (inputWord.length < 1) {
    return [];
  }

  // check for two letter candidates
  if (inputWord.length >= 2) {
    const two = inputWord.substring(0, 2);

    if (elementsMap.has(two)) {
      if (two === inputWord) {
        return [two];
      }

      const rest = check(inputWord.substring(2));

      if (rest.length > 0) {
        return [two, ...rest];
      }
    }
  }

  // check for one letter candidates
  const one = inputWord.substring(0, 1);

  if (elementsMap.has(one)) {
    if (one === inputWord) {
      return [one];
    }

    const rest = check(inputWord.substring(1));

    if (rest.length > 0) {
      return [one, ...rest];
    }
  }

  return [];
}

function lookup(elementSymbol) {
  const lowerCaseSymbol = elementSymbol.toLowerCase();
  if (elementsMap.has(lowerCaseSymbol)) {
    return elements[elementsMap.get(lowerCaseSymbol)];
  }

  return {};
}
