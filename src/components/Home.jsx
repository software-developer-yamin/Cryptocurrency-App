import { Col, Row, Statistic, Typography } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify"
import { Link } from "react-router-dom";
import Cryptocurrencies from "./Cryptocurrencies";
import News from "./News";

const { Title } = Typography;

function Home() {
  const {data, isFetching } = useGetCryptosQuery();
  console.log(data);
  const globalStats = data?.data?.stats;
  if(isFetching) return "Loading...";
  return (
    <>
      <Title level={2} className="handing">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={millify(globalStats.total)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptos In The World
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3}>
          <Link to="/news">Show more</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
}

export default Home;
