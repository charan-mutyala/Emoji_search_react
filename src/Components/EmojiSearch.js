import React, { useState } from 'react'
const emojis=[
    {
    id:1,
    Symbol:"😡",
    name: "anger"
    },
    {
        id:2,
        Symbol:"🤫",
        name: "silent"
        },
        {
            id:3,
            Symbol:"🙁",
            name: "sad"
            },
            {
                id:4,
                Symbol:"😭",
                name: "crying"
                },
                {
                    id:5,
                    Symbol:"🥳",
                    name: "hurah"
                    },
                    {
                        id:6,
                        Symbol:"😴",
                        name: "sleeping"
                        },
                        {
                            id:7,
                            Symbol:"🏃",
                            name: "running"
                            },
                            {
                                id:8,
                                Symbol:"🤩",
                                name: "smile"
                                },
                                {
                                    id:9,
                                    Symbol:"🤨",
                                    name: "looking serious"
                                    },
                                    {
                                        id:10,
                                        Symbol:"🤌",
                                        name:"catch"
                                        },
];

function EmojiSearch() {
    const [searchEmoji,setSearchEmoji]=useState("");

    const handleChange=(e)=>{
        setSearchEmoji(e.target.value);
    }
    const showEmoji=emojis.filter((emoji)=>{
        const emojiName=emoji.name.toLowerCase();
        return (emojiName.includes(searchEmoji.toLowerCase()));
        // return(showEmoji);
    });
  return (
    <div>
        <h1>
            React Emoji App!!!!
        </h1>
        <input type='text' placeholder='search for the emoji...'value={searchEmoji} onChange={handleChange}/>
        <div>
            {
            showEmoji.map((emoji)=>emoji.Symbol) 
            }
                        
            
            </div>
    </div>
  )
}

export default EmojiSearch