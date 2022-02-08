import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Footer() {
  return (
    <>
      <footer className="bottom-0 start-0 py-3">
        {" "}
        <div className="d-flex justify-content-center align-items-center">
          <Link to="/about">
            {" "}
            <Button>About</Button>
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;
