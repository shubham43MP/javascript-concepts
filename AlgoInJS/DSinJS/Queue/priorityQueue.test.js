const PriorityQueue = require('./priorityQueue');

describe('PriorityQueue', () => {
  let pq;

  beforeEach(() => {
    pq = new PriorityQueue();
  });

  describe('constructor', () => {
    it('should create an empty priority queue', () => {
      expect(pq.length()).toBe(0);
      expect(pq.isEmpty()).toBe(true);
    });
  });

  describe('enqueue', () => {
    it('should add the first element to the queue', () => {
      pq.enqueue('A', 1);
      expect(pq.length()).toBe(1);
      expect(pq.front().element).toBe('A');
    });

    it('should add a high priority element in front of a lower priority one', () => {
      pq.enqueue('B', 2); // Lower priority
      pq.enqueue('C', 1); // High priority
      expect(pq.front().element).toBe('C');
      expect(pq.length()).toBe(2);
    });

    it('should add a low priority element to the back', () => {
      pq.enqueue('D', 3); // Lowest priority
      pq.enqueue('E', 4); // Even lower
      expect(pq.front().element).toBe('D');
      expect(pq.rear().element).toBe('E');
    });

    it('should handle multiple elements with the same priority', () => {
      pq.enqueue('F', 2);
      pq.enqueue('G', 2);
      pq.enqueue('H', 2);
      expect(pq.length()).toBe(3);
      expect(pq.front().element).toBe('F');
      expect(pq.rear().element).toBe('H');
    });

    it('should insert a new high priority element in the middle', () => {
      pq.enqueue('I', 3);
      pq.enqueue('J', 1); // Highest
      pq.enqueue('K', 3);
      expect(pq.items[0].element).toBe('J'); // Should be in the middle
    });
  });

  describe('dequeue', () => {
    it('should remove the front element from the queue', () => {
      pq.enqueue('L', 1);
      const removed = pq.dequeue();
      expect(removed.element).toBe('L');
      expect(pq.length()).toBe(0);
    });

    it('should return "Underflow" when the queue is empty', () => {
      const result = pq.dequeue();
      expect(result).toBe('Underflow');
    });

    it('should remove the highest priority element first', () => {
      pq.enqueue('M', 2);
      pq.enqueue('N', 1);
      const first = pq.dequeue();
      expect(first.element).toBe('N'); // N should be first
      const second = pq.dequeue();
      expect(second.element).toBe('M');
    });
  });

  describe('front', () => {
    it('should return the element at the front without removing it', () => {
      pq.enqueue('O', 1);
      expect(pq.front().element).toBe('O');
      expect(pq.length()).toBe(1);
    });

    it('should return "Underflow" when the queue is empty', () => {
      expect(pq.front()).toBe('Underflow');
    });
  });

  describe('rear', () => {
    it('should return the element at the back', () => {
      pq.enqueue('P', 3);
      pq.enqueue('Q', 1); // Pushes P to the back
      expect(pq.rear().element).toBe('P');
    });

    it('should return "Underflow" when the queue is empty', () => {
      expect(pq.rear()).toBe('Underflow');
    });

    it('should return the correct element in a mixed priority queue', () => {
      pq.enqueue('R', 2);
      pq.enqueue('S', 1); // High priority
      expect(pq.rear().element).toBe('R');
    });
  });

  describe('length', () => {
    it('should return the correct count of elements', () => {
      pq.enqueue('T', 1);
      pq.enqueue('U', 2);
      expect(pq.length()).toBe(2);
    });

    it('should return 0 for an empty queue', () => {
      expect(pq.length()).toBe(0);
    });
  });

  describe('displayPriorityQueue', () => {
    it('should log all items in the queue', () => {
      pq.enqueue('V', 1);
      pq.enqueue('W', 2);
      const logs = [];
      const originalLog = console.log;
      console.log = jest.fn((val) => logs.push(val));
      pq.displayPriorityQueue();
      console.log = originalLog;
      expect(logs).toEqual([
        { element: 'V', priority: 1 },
        { element: 'W', priority: 2 }
      ]);
    });
  });
});