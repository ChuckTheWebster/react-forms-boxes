function Box({ height, width, backgroundColor, deleteBox }) {

  const boxStyle = {
    height,
    width,
    backgroundColor,
  }

  // function Box({ favoriteColor, otherColor, message }) {
  //   const myStyles = {
  //     color: favoriteColor,
  //     backgroundColor: otherColor,
  //   };

  //   return <b style={myStyles}>{message}</b>;
  // }

  return (
    <div className="Box">
      <div style={ boxStyle }>
      </div>
      <button onClick={ deleteBox }>X</button>
    </div>

  )
}

export default Box;