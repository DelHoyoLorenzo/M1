

function Queue() {
    this.array=[];
  }
  
  Queue.prototype.enqueue = function(element){
    this.array.push(element);
  }
  
  Queue.prototype.dequeue = function(){

    return this.array.pop();
  }
  
  Queue.prototype.size= function(){
    return this.array.length;
  }
  
  const cola = new Queue();
  cola.enqueue(1);
  cola.enqueue(2);
  cola.dequeue()
  console.log(cola.size())
  console.log(cola.array)
  console.log(cola.dequeue())