import React from 'react'

const CharacterItem = ({item}) => {
  return (
    <div className='card'>
        <div className='card-inner'>
            <div className='card-front'>
                <img src={item.img} alt=''/>
            </div>
            <div className='card-back'>
                <h1>{item.name}</h1>
                <ul>
                    <li>
                        <b>Actor Name: </b> {item.portrayed}
                    </li>
                    <li>
                        <b>Nick Name: </b> {item.nickname}
                    </li>
                    <li>
                        <b>Birthday: </b> {item.birthday}
                    </li>
                    <li>
                        <b>Status: </b> {item.status}
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default CharacterItem