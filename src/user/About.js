import { useState } from "react";

const About = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="row m-auto p-5 bg-secondary bg-opacity-10">
        <div className="col-lg-1"></div>
        <div className="col-lg-4 d-flex justify-content-center mb-4 mb-lg-0">
          <div className="w-full h-full">
            <img className="rounded-3 float-start img-fluid hover" src={`../images/noodles.jpg`} alt="noodles"/>
          </div>
        </div>
        <div className="col-lg-6 d-flex flex-column">
          <h3 className="text-center text-lg-start">AxiMart</h3>
          <p style={{textAlign: "justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam vitae nisl mattis, auctor dui sit amet, tristique mauris.
            Aenean consequat ante nec aliquet sodales.
            Nullam fringilla quam non odio efficitur gravida ac ac libero.
            Maecenas quis lacus volutpat, mattis ex a, dictum mi.
            Aliquam id lectus eget enim gravida auctor et quis nibh.
            Curabitur dictum ex at urna pharetra sodales.
            Aliquam sodales mi et lorem suscipit, eget sollicitudin elit porta.
            Nullam fermentum tellus quis ullamcorper laoreet.
          </p>
        </div>
        <div className="col-lg-1"></div>
      </div>
  
      <form onSubmit={handleSubmit} className="bg-light border border-secondary-subtle m-5 p-5 rounded-4 shadow" style={{width: "700px"}}>
        <div className="mb-4">
          <label for="name" className="form-label fw-bold">Name (*optional)</label>
          <input placeholder="Shiro Yuki" value={name} onChange={(e) => setName(e.target.value)} type="text" className="w-100 py-1 px-2" id="name" />
        </div>
        <div>
          <label for="message" className="form-label fw-bold">Message</label>
          <textarea placeholder="Leave a comment here" value={message} onChange={(e) => setMessage(e.target.value)} className="mb-4 w-100 py-1 px-2" id="message" style={{height: "150px"}}></textarea>
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary float-left">Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default About;