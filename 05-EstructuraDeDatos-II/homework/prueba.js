function LinkedList() {
    this.head = null;
  }
  
  function Node(value) {
    this.value = value;
    this.next = null;
  }
  
  LinkedList.prototype.add = function(value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
  }

  LinkedList.prototype.search = function(parametro){
    let current = this.head;
    while(parametro !== current.value) {
      current=current.next
    }
    return current;
  }
  
  function suma(a){
    return a*2;
  }

  let lista=new LinkedList();
  lista.add(1);
  lista.add(2);
  lista.add(3);
  lista.add(4);
  console.log(lista.search(suma(4)));