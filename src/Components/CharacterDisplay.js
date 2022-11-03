import React from 'react'
import CharacterItem from './CharacterItem'

const CharacterDisplay = ({items,loading}) => {
  return loading ? (<h1>Loading..</h1>) : (
    <div className='cards'>
        {
            items.map((item)=>(
                <CharacterItem item={item} key={item.char_id} ></CharacterItem>
            ))
        }
    </div>
  )
}

export default CharacterDisplay