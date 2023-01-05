import { useState } from "react";
import Jumbotron from '../components/cards/Jumbotron';

export default function Register ()
{
  //state
  const [ name, setName ] = useState( '' );
  const [ email, setEmail ] = useState( '' );
  const [ password, setPassword ] = useState( '' );

  return (
    <div>
      <Jumbotron title="Register" />

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <input
              type="text"
              className="form-control mb-4 p-2"
              placeholder="Enter your name"
              >
            </input>
          </div>
        </div>
      </div>
    </div>
  );
}
