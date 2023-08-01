import React from 'react'

function NameList() {
    // const name=['Steve','Tony','Peter','Parker','Natasha'];
    const name=[
    {
        id:1,
        name:'Steve',
        heroName:'Captain America'
    },
    {
        id:2,
        name:'Peter',
        heroName:'Spiderman'
    },
    {
        id:3,
        name:'Natashaa',
        heroName:'Black  Widow'
    },
    {
        id:4,
        name:'Tony',
        heroName:'Iron Man'
    }
];
  return (
    <div>
        <h1>NameList</h1>
        {/* <h2>{name}</h2> */}{
        name.map((n,index)=><h2>i am {n.name} and i am also known as {n.heroName}</h2>)
}
    </div>
  )
}

export default NameList