export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const el of array) {
    const value = el;
    newArray.push(appendString + value);
  }

  return newArray;
}
