class HashTable {
  constructor(){
    this.buckets = new Array(127);
    this.size = 0;
  }

  hash(key){
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.buckets.length; // ensure the hash value doesn't exceed the length of the array
  }

  set(key, value){
    const index = this.hash(key);
    this.buckets[index] = [key,value]; // 將鍵值對存儲在對應的桶中
    this.size++;
  }

  get(key){
    const index = this.hash(key);
    if(!this.buckets[index]) {
      return null;
    }
    return this.buckets[index];
  }

  delete(key){
    const index = this.hash(key);
    if(this.buckets[index] && this.buckets[index].length) {
      this.buckets[index] = undefined; // 如果桶和鍵都存在，則刪除對應的鍵值對
      this.size--;
      return true;
    }
    return false;
  }
}
// test hash table
const ht = new HashTable();
ht.set("Canada", 300);
ht.set("France", 100);
ht.set("Spain", 110);

console.log(ht.get("Canada")); // [ 'Canada', 300 ]
console.log(ht.get("France")); // [ 'France', 100 ]
console.log(ht.get("Spain")); // [ 'Spain', 110 ]

console.log(ht.delete("Spain")); // true
console.log(ht.get("Spain")); // undefined

// hash table index collision
const ht_collision = new HashTable();

ht_collision.set("Spain", 110);
ht_collision.set("ǻ", 192);

console.log(ht_collision.get("Spain")); // [ 'ǻ', 192 ]
console.log(ht_collision.get("ǻ")); // [ 'ǻ', 192 ]

// ------------------hash table collision--------------------------------------
console.log('------------------hash table collision--------------------------------------')

class HashTableCollision {
  constructor() {
    this.buckets = new Array(127);
    this.size = 0;
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.buckets.length; // ensure the hash value doesn't exceed the length of the array
  }
  set(key, value) {
    const index = this.hash(key);
    if (this.buckets[index]) {
      for (let i = 0; i < this.buckets[index].length; i++) {
        if (this.buckets[index][i][0] === key) {
          this.buckets[index][i][1] = value; // 更新現有的鍵值對
          return;
        }
      }
      this.buckets[index].push([key, value]); // 如果鍵不存在，則將鍵值對添加到鏈表中
    } else {
      this.buckets[index] = [];
      this.buckets[index].push([key, value]);
    }
    this.size++;
  }
  get(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      return null;
    }
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === key) {
        return this.buckets[index][i][1];
      }
    }
    return null;
  }

  delete(key) {
    const index = this.hash(key);
    if (!this.buckets[index]) {
      return false;
    }
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i][0] === key) {
        this.buckets[index].splice(i, 1); // 刪除鍵值對
        this.size--;
        return true;
      }
    }
    return false;
  }

  display() {
    this.buckets.forEach((values, index) => {
      const chainedValues = values.map(
        ([key, value]) => `[ ${key}: ${value} ]`
      );
      console.log(`${index}: ${chainedValues}`);
    });
  }
}

// test hash table collision
const ht_chaining = new HashTableCollision();
ht_chaining.set("Canada", 300);
ht_chaining.set("France", 100);
ht_chaining.set("Spain", 110);

ht_chaining.display();

console.log(ht_chaining.delete("Spain")); // true
console.log(ht_chaining.get("Spain")); // undefined

ht_chaining.set("Spain", 110);
ht_chaining.set("ǻ", 192);

console.log(ht_chaining.get("Spain")); // [ 'Spain', 110 ]
console.log(ht_chaining.get("ǻ")); // [ 'ǻ', 192 ]

ht_chaining.display();