class Node {
  constructor(key, value) {
    this.value = value;
    this.key = key;
    this.left = null;
    this.right = null;
  }
  left() {
    return this.left;
  }
  right() {
    return this.right;
  }
  
  free() {
    this.left = null;
    this.right = null;
  }
}

export default Node;