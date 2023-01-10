import {useState} from "react";

const useStateWithHistory = (val)=> {
    const [value,setVal] = useState(val);
    const [history,setHistory] = useState([]);
    const [pointer,setPointer] = useState(-1);


    function newSetVal(newVal) {
        setVal(newVal);
        const nHistory = history.concat([newVal])
        setHistory(nHistory)
        setPointer(nHistory.length - 1)
    }
    function left(){
        const tmppointer = pointer-1;
        if(tmppointer < 0){
            return ;
        }
        setPointer(tmppointer);
        setVal(history[tmppointer]);
    }
    function goForward(){
        const tmppointer = pointer+1
        if(tmppointer >= history.length){
            return
        }
        setPointer(tmppointer);
        setVal(history[tmppointer])
    }
    return [value,newSetVal,left,goForward,history]
}

export default useStateWithHistory;