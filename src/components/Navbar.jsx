import { Avatar, Typography } from "antd";
import { Link } from "react-router-dom";
import Icon from "../images/cryptocurrency.png";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-container">
        <Avatar src={Icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptocurrency</Link>
        </Typography.Title>
      </div>
    </div>
  );
}

export default Navbar;
