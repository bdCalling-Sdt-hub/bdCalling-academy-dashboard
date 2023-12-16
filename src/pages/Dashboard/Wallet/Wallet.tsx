import { Col, Row } from "antd";
import WalletSurvey from "../../../component/Wallets/WalletSurvey/WalletSurvey";
import WalletChart from "../../../component/Wallets/WalletChart/WalletChart";

export default function Wallet() {
  return (
    <div className="h-screen">
      <WalletSurvey />
      <Row>
        <Col lg={14}>
          <WalletChart />
        </Col>
      </Row>
    </div>
  );
}
