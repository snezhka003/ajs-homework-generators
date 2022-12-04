export default function canIterate(obj) {
  try {
    if (obj[Symbol.iterator]) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}
