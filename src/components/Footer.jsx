import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function Footer() {
  const currentLocation = useLocation();
  return currentLocation.pathname === "/about" ? (
    ""
  ) : (
    <>
      <footer className="bottom-0 start-0">
        <div className="d-flex justify-content-center align-items-center">
          <Link to="/about">
            <Button>About</Button>
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;
