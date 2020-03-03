import React from 'react';
import './SortingVisualizer.css';
import * as sortingAlgorithms from '../sortingAlgorithms/sortingAlgorithms';

export default class SortingVisualizer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }
    
    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];
        for(let i = 0; i < 200; i++){
            array.push(randomIntFromInterval(5, 600));
        }
        this.setState({array});
    }

    mergeSort(){
        
        const arrayBars = document.querySelectorAll('.array-bar');
        const javaScriptArray = this.state.array.slice().sort( (a, b) => a - b);
        
        for (let index = 0; index < javaScriptArray.length; index++) {
            arrayBars[index].style.backgroundColor = "green";
            arrayBars[index].style.height = `${javaScriptArray[index]}px`;
        }
    }

    quickSort(){
        const anim =  sortingAlgorithms.quickSort(this.state.array);
        const animations = [];

        for(let i = 0; i < anim.length; i++){
            animations.push(anim[i]);
            animations.push(anim[i]);
        }

        const arrayBars = document.querySelectorAll('.array-bar');

        for(let i = 0; i < animations.length; i++){    
            const isColorChanged = i % 2 !== 0;

            if(isColorChanged){
                setTimeout(() =>{                
                    arrayBars[animations[i].swapVal[0]].style.backgroundColor = "rgb(226, 99, 99)";
                    arrayBars[animations[i].swapVal[2]].style.backgroundColor = "rgb(226, 99, 99)";
    
                    arrayBars[animations[i].swapVal[0]].style.height = `${animations[i].swapVal[3]}px`;
                    arrayBars[animations[i].swapVal[2]].style.height = `${animations[i].swapVal[1]}px`;
    
                }, i * 10);
            }else{         
            
                setTimeout(() =>{
                    arrayBars[animations[i].swapVal[0]].style.backgroundColor = "blue";
                    arrayBars[animations[i].swapVal[2]].style.backgroundColor = "blue";
                }, i * 10);
            }
        }

    }

    heapSort(){
        const anim =  sortingAlgorithms.heapSort(this.state.array);
        const animations = [];
        
        for(let i = 0; i < anim.length; i++){
            animations.push(anim[i]);
            animations.push(anim[i]);
        }

        const arrayBars = document.querySelectorAll('.array-bar');

        for(let i = 0; i < animations.length; i++){    

                
            const isColorChanged = i % 2 !== 0;

            if(isColorChanged){
                setTimeout(() =>{                
                    arrayBars[animations[i].swapVal[0]].style.backgroundColor = "rgb(226, 99, 99)";
                    arrayBars[animations[i].swapVal[2]].style.backgroundColor = "rgb(226, 99, 99)";
    
                    arrayBars[animations[i].swapVal[0]].style.height = `${animations[i].swapVal[1]}px`;
                    arrayBars[animations[i].swapVal[2]].style.height = `${animations[i].swapVal[3]}px`;
    
                }, i * 10);
            }else{         
            
                setTimeout(() =>{
                    arrayBars[animations[i].swapVal[0]].style.backgroundColor = "blue";
                    arrayBars[animations[i].swapVal[2]].style.backgroundColor = "blue";
                }, i * 10);
            }
        }
    }
    

    bubbleSort(){
        const anim =  sortingAlgorithms.bubbleSort(this.state.array);
        const animations = [];

        for(let i = 0; i < anim.length; i++){
            animations.push(anim[i]);
            animations.push(anim[i]);
        }

        const arrayBars = document.querySelectorAll('.array-bar');

        for(let i = 0; i < animations.length; i++){    
            const isColorChanged = i % 2 !== 0;

            if(isColorChanged){
                setTimeout(() =>{                
                    arrayBars[animations[i].swapVal[0]].style.backgroundColor = "rgb(226, 99, 99)";
                    arrayBars[animations[i].swapVal[2]].style.backgroundColor = "rgb(226, 99, 99)";
    
                    arrayBars[animations[i].swapVal[0]].style.height = `${animations[i].swapVal[3]}px`;
                    arrayBars[animations[i].swapVal[2]].style.height = `${animations[i].swapVal[1]}px`;
    
                }, i * 5);
            }else{         
            
                setTimeout(() =>{
                    arrayBars[animations[i].swapVal[0]].style.backgroundColor = "blue";
                    arrayBars[animations[i].swapVal[2]].style.backgroundColor = "blue";
                }, i * 5 );
            }
            
        }
    }
    
    testSortingAlgorithms(){
        // heapSort return array of animations not the sorted array
        
        //const sortedArray = sortingAlgorithms.heapSort(this.state.array); 
        //const javaScriptArray = this.state.array.slice().sort( (a, b) => a - b);

        //console.log("Are they equal?")
        //console.log(arraysAreEqual(javaScriptArray, sortedArray));
    }

    render() {
        const {array} = this.state;

        return(
            <div>
            <div className="array-container">
                {array.map((value, idx)=>(
                    <div className="array-bar" key={idx} style={{height: `${value}px`}}>
                    </div>
                ))}
            </div>

            <button onClick={ () => this.resetArray()}>Generate New</button>
            <button onClick={ () => this.testSortingAlgorithms()}>Test</button>
            
            <button onClick={ () => this.mergeSort()}>Merge Sort</button>
            <button onClick={ () => this.quickSort()}>Quick Sort</button>
            <button onClick={ () => this.heapSort()}>Heap Sort</button>
            <button onClick={ () => this.bubbleSort()}>Bubble Sort</button>
            </div>
         );
    } 
}

// https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrOne, arrTwo){
    if(arrOne.length !== arrTwo.length) return false;
    for(let i = 0; i < arrOne.length; i++){
        if(arrOne[i] !== arrTwo[i])return false;
    }
    return true;
}