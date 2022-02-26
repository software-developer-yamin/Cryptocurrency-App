import {
  BulbOutlined,
  FundOutlined,
  HomeOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import { Avatar, Menu, Typography } from "antd";
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
        <Menu>
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;