
// 1. Heap sorting 
export const heapSort = array =>{
   
    const animations = [];
    let heap = new MinHeap(animations);
    for (let index = 0; index < array.length; index++) {
        heap.insert(array[index]);
    }
    return heap.sort();
}

/* Heap */  

// parent: i / 2 floor
// left child: i * 2
// right child: i * 2 + 1

let MinHeap = function(animations) {
	
	let heap = [null];
	
	this.insert = function(num) {
		heap.push(num);
		if (heap.length > 2) {
			let idx = heap.length - 1;
			while (heap[idx] < heap[Math.floor(idx/2)]) {
				if (idx >= 1) {
                    [heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];
                    
                    const animation = {};
                    animation.swapVal = [idx - 1, heap[idx], Math.floor(idx/2) - 1,heap[Math.floor(idx/2)] ];
                    animations.push(animation);

                    if (Math.floor(idx/2) > 1) {

                        idx = Math.floor(idx/2);
        			} else {
						break;
                    };
                    
                   
				};
			};
		};
	};
	
	this.remove = function() {
		let smallest = heap[1];
		if (heap.length > 2) {
			heap[1] = heap[heap.length - 1];
			heap.splice(heap.length - 1);
			if (heap.length === 3) {
				if (heap[1] > heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]];
				};
				return smallest;
			};
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			while (heap[i] >= heap[left] || heap[i] >= heap[right]) {
				if (heap[left] < heap[right]) {
					[heap[i], heap[left]] = [heap[left], heap[i]];
					i = 2 * i
				} else {
					[heap[i], heap[right]] = [heap[right], heap[i]];
					i = 2 * i + 1;
				};
				left = 2 * i;
				right = 2 * i + 1;
				if (heap[left] === undefined || heap[right] === undefined) {
					break;
				};
			};
		} else if (heap.length === 2) {
			heap.splice(1, 1);
		} else {
			return null;
		};
		return smallest;
	};
  
	this.sort = function() {
        let index = 0;
		while (heap.length > 2) {
            const value1 = this.remove();
            const value2 = this.remove();
            
            //result.push(value);
            const animation = {};
            animation.swapVal = [index, value1, index + 1, value2];
            index+=2;
            animations.push(animation);
        };
		return animations;
	};

};


// 2. Quick sorting with additional function partition | recursive
export const quickSort = array =>{
    const animations = [];

    if(array.length === 1) return array;
    quickAlgo(array, 0, array.length - 1, animations);

    return animations;
}

function quickAlgo(arr, start, end, animations){

    if(start >= end) {
        return;
    }
    let index = partition(arr, start, end, animations);
    
    quickAlgo(arr, index + 1, end, animations);
    quickAlgo(arr, start, index -1, animations);
}

function partition(arr, start, end, animations){  

    let pivotValue = arr[end];
    let pivotIndex = start;

    for(let i = start; i < end; i++){
        
        if(arr[i] < pivotValue)
        {
            const animation = {};    
            animation.swapVal = [i, arr[i], pivotIndex, arr[pivotIndex]];
            animations.push(animation);

            //swaping
            let temp = arr[i];
            arr[i] = arr[pivotIndex];
            arr[pivotIndex] = temp;  

            pivotIndex++;
        }
    }
        const animation = {};       
        animation.swapVal = [end, arr[end], pivotIndex, arr[pivotIndex]];
        animations.push(animation);
     
        //swaping
        let temp = arr[end];
        arr[end] = arr[pivotIndex];
        arr[pivotIndex] = temp;

    return pivotIndex;
}



// 3. Bubble sorting with additional checking
export const bubbleSort = array => {
    const animations = [];
    let len = array.length;

    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            const animation = {};

            if (array[i] > array[i + 1]) {
                
                let tmp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = tmp;
    
                animation.swapVal = [i, array[i + 1], i+1, array[i]];
                animations.push(animation);
    
                swapped = true;
            }
        }
    } while (swapped);
    
    return animations;
}

