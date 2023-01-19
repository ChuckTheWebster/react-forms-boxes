import NewBoxForm from "./NewBoxForm";
import Box from "./Box";



function Boxlist() {
const [box, setBox] = useState({height: "",
  width: "",
  backgroundColor: ""})

function deleteBox(evt) {

  setBox();
}

boxes =

  return (
    <NewBoxForm/>
    { boxes.map(box => <Box height={ height } width={ width } backgroundColor={ backgroundColor } deleteBox={ deleteBox }/>) }
  )
}

export default Boxlist;