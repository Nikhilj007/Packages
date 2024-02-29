import React,{useEffect,useRef, useState} from 'react';
import './Scrollset.css';

const Scrollset = ({list,SelectedColor}: {list :string[],SelectedColor:string}) => {
    const ulRef = useRef<HTMLUListElement>(null);
    const [selected, setSelected] = useState<string>("");
    const handlescroll = () => {
        const scrollLeft = ulRef?.current?.scrollLeft||0;
        const clientWidth = ulRef?.current?.clientWidth||0;
        const scrollWidth = ulRef?.current?.scrollWidth||0;
        
        // Calculate the middle position of the scrollable container
        const middle = scrollLeft + clientWidth / 2;
        
        // Calculate the width of each item in the list
        const itemWidth = scrollWidth / list.length;
        
        // Calculate the index of the selected item
        const selected = Math.floor(middle / itemWidth);
        console.log("scrollLeft",scrollLeft,"clientWidth",clientWidth,"scrollWidth",scrollWidth,"middle",middle,"itemWidth",itemWidth,"selected",selected)
        setSelected(list[selected]);
        console.log(list[selected]);
      }

      const renderListItems = (list : string[]) => {
        return list.map((item, index) => (
          <li
            key={index}
            className={`li`} 
            style={selected === item ? { backgroundColor: SelectedColor, color: 'white' } : {}}
          >
            {item}
          </li>
        ));
      };

    useEffect(() => {
        if(ulRef.current){
            ulRef.current.scrollLeft = ulRef.current.scrollWidth / 2 - ulRef.current.offsetWidth / 2;
        }
    }, [list]);
    return (
        <div className='main'>
            <ul onScroll={handlescroll} className='ul'>
                {renderListItems(list)}
            </ul>
        </div>
    );
}

export default Scrollset;