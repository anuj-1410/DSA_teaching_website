import React, { useState, useEffect, useRef } from 'react';
import { FaArrowDownLong } from "react-icons/fa6";
import { FaArrowUpLong } from "react-icons/fa6";
import './sortDemo.css';

export default function Demo() {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [steps, setSteps] = useState([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isSetup, setIsSetup] = useState(false);
  const [content, setContent] = useState("Observations");
  const [initialData, setInitialData] = useState([]);

  const dataRef = useRef(data);
  dataRef.current = data;


  let down = <FaArrowDownLong size={20}/>;
  const arrSmall = [down, down, down, down, down, down, down, down, down, down];
  let up = <FaArrowUpLong size={20}/>;
  const arrLarge = [up, up, up, up, up, up, up, up, up, up];

  const partition = (arr, low, high, stepList) => {
    let pivot = arr[low];
    let pivotClr = document.getElementById(`sqr-${low}`);
    stepList.push(() => {
        if (pivotClr) pivotClr.style.backgroundColor = "#48cae4";
        setContent(`Select the first element ${pivot} of array as Pivot`);
    });

    let i = low + 1;
    let j = high;
    let k = low + 1;
    let l = high;

    let runOnceI = true;
    let runOnceJ = true;

    while (i <= j) {
        while (i <= high && arr[i] <= pivot) {
            i++;
        }
        while (j >= low && arr[j] > pivot) {
            j--;
        }

        while (k <= i) {
          if(k===high && k!==i){
            let ele1 = document.getElementById(`arrUp-${k}`);
            if(runOnceI){
              stepList.push(() => {
                if (ele1) {
                    ele1.style.opacity = 1;
                }
                setContent(`Search for larger element than pivot`);
            });
            runOnceI = false;
            }
            stepList.push(() => {
              setContent(`Larger element not found`);
            });
            break;
          }
          else if (k === i) {
                let ele1 = document.getElementById(`arrUp-${k}`);
                let ele2 = document.getElementById(`sqr-${k}`);
                const currentK = arr[k];
                if(runOnceI){
                  stepList.push(() => {
                    if (ele1) {
                        ele1.style.opacity = 1;
                    }
                    setContent(`Search for larger element than pivot`);
                });
                runOnceI = false;
                }
                
                stepList.push(() => {
                  if (ele2) {
                      ele2.style.backgroundColor = "#fdd85d";
                  }
                  setContent(`Got element larger than pivot : ${currentK}`);
                });
                k = i;
                break;
            } else {
                let ele = document.getElementById(`arrUp-${k}`);
                if (runOnceI) {
                    stepList.push(() => {
                        if (ele) {
                            ele.style.opacity = 1;
                        }
                        setContent(`Search for larger element than pivot`);
                    });
                    runOnceI = false;
                }
                let nextEle = document.getElementById(`arrUp-${k + 1}`);
                stepList.push(() => {
                    if (ele && nextEle) {
                        ele.style.opacity = 0;
                        nextEle.style.opacity = 1;
                    }
                    setContent(`Search for larger element than pivot`);
                });
                k++;
            }
        }

        while (l >= j) {
          if(l===low){
            stepList.push(() => {
              setContent(`Smaller or equal element not found`);
            });
            break;
          }
          else if (l === j) {
                let ele1 = document.getElementById(`arrDown-${l}`);
                let ele2 = document.getElementById(`sqr-${l}`);
                const currentL = arr[l];
                if(runOnceJ){
                  stepList.push(() => {
                    if (ele1) {
                        ele1.style.opacity = 1;
                    }
                    setContent(`Search for smaller or equal element than pivot`);
                });
                runOnceJ = false;
                }
                
                stepList.push(() => {
                  if (ele2) {
                      ele2.style.backgroundColor = "#fdd85d";
                      setContent(`Got element smaller than or equal to pivot : ${currentL}`);
                  }
              });
                l = j;
                break;
            } else {
                let ele = document.getElementById(`arrDown-${l}`);
                if (runOnceJ) {
                    stepList.push(() => {
                        if (ele) {
                            ele.style.opacity = 1;
                        }
                        setContent(`Search for smaller or equal element than pivot`);
                    });
                    runOnceJ = false;
                }
                let nextEle = document.getElementById(`arrDown-${l - 1}`);
                stepList.push(() => {
                    if (ele && nextEle) {
                        ele.style.opacity = 0;
                        nextEle.style.opacity = 1;
                    }
                    setContent(`Search for smaller or equal element than pivot`);
                });
                l--;
            }
        }

        if (i < j) {
            const currentI = arr[i];
            const currentJ = arr[j];
            [arr[i], arr[j]] = [arr[j], arr[i]];
            let ele3 = document.getElementById(`sqr-${i}`);
            let ele4 = document.getElementById(`sqr-${j}`);
            let disarr = [...arr];
            stepList.push(() => {
                setDisplayData([...disarr]);
                if (ele3) ele3.style.backgroundColor = "var(--sort-demo)";
                if (ele4) ele4.style.backgroundColor = "var(--sort-demo)";
                setContent(`Swapping of the elements ${currentI} and ${currentJ}`);
            });
        }
    }

    const currentP = arr[low];
    const currentS = arr[j];
    [arr[low], arr[j]] = [arr[j], arr[low]];

    let ele3 = document.getElementById(`sqr-${i}`);
    if(j!==low){
      stepList.push(() => {
        setContent(`Crossover happens as j crosses i`);
      })
      stepList.push(() => {
          if (ele3 && i<=high) ele3.style.backgroundColor = "var(--sort-demo)";
          setContent(`Swapping of pivot with smaller element ( ${currentP} <-> ${currentS} )`);
      });
    }
    return [j,i];
};



  const quickSort = (arr, low, high, stepList) => {
    if (low < high) {
      let [pi,iv] = partition(arr, low, high, stepList);
      let disarr = [...arr];
      let elePivotUp = document.getElementById(`arrUp-${iv}`);
      let eleNotUp = document.getElementById(`arrUp-${high}`);
      let elePivotDown = document.getElementById(`arrDown-${pi}`);
      let elePivot = document.getElementById(`sqr-${pi}`);
      let pivotClr = document.getElementById(`sqr-${low}`);
      let ele3 = document.getElementById(`sqr-${iv}`);
      stepList.push(() => {
        setDisplayData([...disarr]);
        if (elePivotUp && iv<=high) elePivotUp.style.opacity = 0;
        if (eleNotUp && iv>high) eleNotUp.style.opacity = 0;
        if (elePivotDown) elePivotDown.style.opacity = 0;
        if (elePivot) elePivot.style.backgroundColor = "#80ed99";
        if (pivotClr && pi!==low) pivotClr.style.backgroundColor = "var(--sort-demo)";
        if (ele3 && iv<=high) ele3.style.backgroundColor = "var(--sort-demo)";
        setContent(
          <>
          Pivot {arr[pi]} is at right place <br/>
          All smaller elements on left of pivot <br />
          All larger elements on right of pivot<br/>
          Array partitioned and same process repeats on subarrays
          </>);
      });
      quickSortRef.current(arr, low, pi - 1, stepList);
      quickSortRef.current(arr, pi + 1, high, stepList);
    }
  }
  const quickSortRef = useRef(quickSort);
  
  const setupArray = () => {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr[i] = Math.floor(Math.random() * 100);
    }
    setData(arr);
    setDisplayData(arr);
    setInitialData(arr);
    setSteps([]);
    setCurrentStepIndex(0);
    setIsSetup(true);
  };

  const handleNext = () => {
    if (currentStepIndex < steps.length) {
      steps[currentStepIndex]();
      if(currentStepIndex===steps.length-1){
        setContent("The array is sorted now");
      }
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
    setContent("Observations");
    setDisplayData(initialData);

    for (let i = 0; i < 10; i++) {
      const square = document.getElementById(`sqr-${i}`);
      const arrowUp = document.getElementById(`arrUp-${i}`);
      const arrowDown = document.getElementById(`arrDown-${i}`);
      if (square) square.style.backgroundColor = "";
      if (arrowUp) arrowUp.style.opacity = "";
      if (arrowDown) arrowDown.style.opacity = "";
    }
  };

  useEffect(() => {
    if (isSetup) {
      const arr = [...dataRef.current];
      const stepList = [];
      quickSortRef.current(arr, 0, arr.length - 1, stepList);
      setSteps(stepList);
      setData(arr);
    }
  }, [isSetup]);


  const handleSort = () => {
    setupArray();
  };

  return (
    <div className="outer-sort">
    <div className="legends">
        <p className='color-legend'><FaArrowDownLong size={20}/> &nbsp;: &nbsp; j &nbsp; ( Right pointer )</p>
        <p className='color-legend'><FaArrowUpLong size={20}/> &nbsp;: &nbsp; i &nbsp; ( Left pointer )</p>
        <span className='color-legend'><span className="sqr-legend" style={{backgroundColor:"#48cae4"}}></span><p> : &nbsp; Selected pivot</p></span>
        <span className='color-legend'><span className="sqr-legend" style={{backgroundColor:"#fdd85d"}}></span><p> : &nbsp; larger and smaller element</p></span>
        <span className='color-legend'><span className="sqr-legend" style={{backgroundColor:"#80ed99"}}></span><p> : &nbsp; right place of pivot</p></span>
    </div>
    <div className='sortAnimation'>
      <div className="arrowDown">
        {arrSmall.map((item,index)=>(
          <div key={index} id={`arrDown-${index}`} className="sqr-arrow">
            <h1>{item}</h1>
          </div>
        ))}
      </div>
      <div className="array">
        {displayData.map((item, index) => (
          <div key={index} id={`sqr-${index}`} className="sqr">
            <h1>{item}</h1>
          </div>
        ))}
      </div>
      <div className="arrowUp">
        {arrLarge.map((item,index)=>(
          <div key={index} id={`arrUp-${index}`} className="sqr-arrow">
            <h1>{item}</h1>
          </div>
        ))}
      </div>
      <div className="contents-sort">
        <div className="content-size">
          <h3>{content}</h3>
        </div>
      </div>
      <div className="buttons-all">
        <button className="button-sort" onClick={handleSort} disabled={isSetup}>Setup</button>
        <button className="button-sort" onClick={handleNext} disabled={!isSetup}>Next</button>
        <button className="button-sort" onClick={handleReset}>Reset</button>
      </div>
    </div>
    </div>
  )
}
