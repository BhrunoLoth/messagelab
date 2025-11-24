// ===== FILA (QUEUE) =====
export class Queue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  peek(): T | undefined {
    return this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  getAll(): T[] {
    return [...this.items];
  }

  clear(): void {
    this.items = [];
  }
}

// ===== PILHA (STACK) =====
export class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  getAll(): T[] {
    return [...this.items];
  }

  clear(): void {
    this.items = [];
  }
}

// ===== LISTA ENCADEADA (LINKED LIST) =====
export class Node<T> {
  data: T;
  next: Node<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

export class LinkedList<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  private length: number = 0;

  append(data: T): void {
    const newNode = new Node(data);
    
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
    
    this.length++;
  }

  prepend(data: T): void {
    const newNode = new Node(data);
    
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    
    this.length++;
  }

  getAll(): T[] {
    const result: T[] = [];
    let current = this.head;
    
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    
    return result;
  }

  size(): number {
    return this.length;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  clear(): void {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  removeLast(): T | undefined {
    if (!this.head) return undefined;

    if (this.head === this.tail) {
      const data = this.head.data;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return data;
    }

    let current = this.head;
    while (current.next && current.next !== this.tail) {
      current = current.next;
    }

    const data = this.tail?.data;
    this.tail = current;
    current.next = null;
    this.length--;
    return data;
  }
}

// ===== ÁRVORE BINÁRIA (BINARY TREE) =====
export class TreeNode<T> {
  data: T;
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

export class BinaryTree<T> {
  root: TreeNode<T> | null = null;

  insert(data: T): void {
    const newNode = new TreeNode(data);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    const queue: TreeNode<T>[] = [this.root];

    while (queue.length > 0) {
      const current = queue.shift()!;

      if (!current.left) {
        current.left = newNode;
        return;
      } else {
        queue.push(current.left);
      }

      if (!current.right) {
        current.right = newNode;
        return;
      } else {
        queue.push(current.right);
      }
    }
  }

  inOrder(): T[] {
    const result: T[] = [];
    
    const traverse = (node: TreeNode<T> | null) => {
      if (!node) return;
      traverse(node.left);
      result.push(node.data);
      traverse(node.right);
    };
    
    traverse(this.root);
    return result;
  }

  preOrder(): T[] {
    const result: T[] = [];
    
    const traverse = (node: TreeNode<T> | null) => {
      if (!node) return;
      result.push(node.data);
      traverse(node.left);
      traverse(node.right);
    };
    
    traverse(this.root);
    return result;
  }

  levelOrder(): T[] {
    if (!this.root) return [];

    const result: T[] = [];
    const queue: TreeNode<T>[] = [this.root];

    while (queue.length > 0) {
      const current = queue.shift()!;
      result.push(current.data);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return result;
  }

  getHeight(): number {
    const calculateHeight = (node: TreeNode<T> | null): number => {
      if (!node) return 0;
      return 1 + Math.max(calculateHeight(node.left), calculateHeight(node.right));
    };

    return calculateHeight(this.root);
  }

  clear(): void {
    this.root = null;
  }
}

// ===== TIPOS DE MENSAGENS =====
export interface Message {
  id: string;
  from: string;
  to: string;
  content: string;
  timestamp: number;
  status: 'sent' | 'delivered' | 'read';
}

export interface Contact {
  id: string;
  name: string;
  lastMessage?: string;
  unreadCount: number;
}
