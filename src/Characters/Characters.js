import React from "react";

const Characters = (props) => {
  const { match } = props;
  const { params } = match;
  const { characterId } = params;

  return (
    <div>
      {`this is the characters page #${characterId}`}
    </div>
  )
}

export default Characters;