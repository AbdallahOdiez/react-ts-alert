import { Bell, CheckCheck, Info, TriangleAlert, Ban } from 'lucide-react';
import Alert from "./components/ui/Alert"

const App = () => {
  return(
    <div style={{ margin: "2rem" }}>
      <Alert type={"alert-default"} icon={<Bell size={20} />} 
      title={"Default Alert"} 
      description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsum corporis sapiente quasi officia, molestias praesentium quaerat. Quae, vero possimus? Nesciunt officiis culpa delectus distinctio doloribus eligendi eius corrupti voluptatibus."}
      />

      <Alert type={"alert-info"} icon={<Info size={20} />} 
      title={"Info Alert"} 
      description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsum corporis sapiente quasi officia, molestias praesentium quaerat. Quae, vero possimus? Nesciunt officiis culpa delectus distinctio doloribus eligendi eius corrupti voluptatibus."}
      />

      <Alert type={"alert-success"} icon={<CheckCheck size={20} />} 
      title={"Success Alert"} 
      description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsum corporis sapiente quasi officia, molestias praesentium quaerat. Quae, vero possimus? Nesciunt officiis culpa delectus distinctio doloribus eligendi eius corrupti voluptatibus."}
      />

      <Alert type={"alert-warning"} icon={<TriangleAlert size={20} />} 
      title={"Warning Alert"} 
      description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsum corporis sapiente quasi officia, molestias praesentium quaerat. Quae, vero possimus? Nesciunt officiis culpa delectus distinctio doloribus eligendi eius corrupti voluptatibus."}
      />

      <Alert type={"alert-error"} icon={<Ban size={20} />} 
      title={"Error Alert"} 
      description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsum corporis sapiente quasi officia, molestias praesentium quaerat. Quae, vero possimus? Nesciunt officiis culpa delectus distinctio doloribus eligendi eius corrupti voluptatibus."}
      />
    </div>
  )
}

export default App