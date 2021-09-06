import React from 'react'

const UNIX = (props) => {
    let milliseconds = props.props * 1000 // 1575909015000
    
    let dateObject = new Date(milliseconds)
    console.log(milliseconds);
    let humanDateFormat = dateObject.toLocaleString() 
console.log(humanDateFormat);

return <div>
{humanDateFormat}
</div>
}

export default UNIX