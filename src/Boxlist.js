import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

function Boxlist() {
  const [boxes, setBoxes] = useState([]);

    // function deleteBox(evt) {
    //   const box = evt.target
    //   useState({...boxes} => indexOf(box))
    //   setBox();
    // }

  function addBox(box) { // {h: ,w: ,bc: }
    let newBox = { ...box, id: uuid() }; //{h: ,w: ,bc: , id: }
    setBoxes(boxes => [...boxes, newBox]);
  } // causes re-render

  const boxComponents = boxes.map(box => <Box
    height={ box.height }
    width={ box.width }
    backgroundColor={ box.backgroundColor }/>);


  return (
    <div>
      <NewBoxForm addBox={ addBox }/>
      { boxComponents }
    </div>
  );

}

export default Boxlist