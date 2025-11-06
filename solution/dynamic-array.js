class DynamicArray {

  constructor(defaultSize=4) {

    defaultSize = defaultSize || 4;
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(defaultSize);

  }

  read(index) {
    return this.data[index];
    
  }

  unshift(val) {

    let newLength = this.length + 1;

    if (newLength > this.capacity) {
      this.resize();
    }

    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[0] = val;
    this.length = newLength;
  }

}


module.exports = DynamicArray;