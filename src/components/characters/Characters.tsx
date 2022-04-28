import React from 'react';
import { Link } from "react-router-dom";
type Props = {}

const Characters = (props: Props) => {
  return (
    <div>
      <Link to={'/'} >back</Link>
      <div>Characters</div>
    </div>
  )
}

export default Characters;