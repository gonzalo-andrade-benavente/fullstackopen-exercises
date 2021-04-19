import { useState } from "react"

export const StateSpread = () => {

    const [clicks, setClicks] = useState({
        left: 0,
        right: 0
    })   

    const [ allClicks, setAllClicks] = useState([]);

    const handleLeftClick = () => {
        
        const leftClick = {
            ...clicks,
            left: clicks.left + 1
        }

        setClicks(leftClick);
        setAllClicks(allClicks.concat('L'));

    }

    const handleRightClick = () => {
        
        const rightClick = {
            ...clicks,
            right: clicks.right + 1
        }

        setClicks(rightClick);
        setAllClicks(allClicks.concat('R'));

    }

    const History = ( props ) => {

        if ( props.allClicks.length === 0) {
            return(
                <>
                    the app is used by pressing the buttons
                </>
            )
        }

        
        return(
            <>
                button press history: { props.allClicks.join(' ') }
            </>
        )

    }

    const Button = ({ handleClick, text}) => {
        return ( 
            <button onClick={ handleClick }> {text} </button>
        )
    }

    return(
        <>
            <h1>State and Spread</h1>

              <Button
                handleClick={handleLeftClick}
                text="Left"
              /> 
              { clicks.left } - { clicks.right } 
              <Button
                handleClick={handleRightClick}
                text="Rigth"
              />
             <hr />
             <History allClicks={ allClicks } />
        </>
    )


}