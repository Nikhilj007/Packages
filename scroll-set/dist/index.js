import React, { useRef, useState, useEffect } from 'react';

const Scrollset = ({ list, SelectedColor }) => {
    const ulRef = useRef(null);
    const [selected, setSelected] = useState("");
    const handlescroll = () => {
        const scrollLeft = ulRef?.current?.scrollLeft || 0;
        const clientWidth = ulRef?.current?.clientWidth || 0;
        const scrollWidth = ulRef?.current?.scrollWidth || 0;
        // Calculate the middle position of the scrollable container
        const middle = scrollLeft + clientWidth / 2;
        // Calculate the width of each item in the list
        const itemWidth = scrollWidth / list.length;
        // Calculate the index of the selected item
        const selected = Math.floor(middle / itemWidth);
        console.log("scrollLeft", scrollLeft, "clientWidth", clientWidth, "scrollWidth", scrollWidth, "middle", middle, "itemWidth", itemWidth, "selected", selected);
        setSelected(list[selected]);
        console.log(list[selected]);
    };
    const renderListItems = (list) => {
        return list.map((item, index) => (React.createElement("li", { key: index, className: `li`, style: selected === item ? { backgroundColor: SelectedColor, color: 'white' } : {} }, item)));
    };
    useEffect(() => {
        if (ulRef.current) {
            ulRef.current.scrollLeft = ulRef.current.scrollWidth / 2 - ulRef.current.offsetWidth / 2;
        }
    }, [list]);
    return (React.createElement("div", { className: 'main' },
        React.createElement("ul", { onScroll: handlescroll, className: 'ul' }, renderListItems(list))));
};

export { Scrollset as default };
