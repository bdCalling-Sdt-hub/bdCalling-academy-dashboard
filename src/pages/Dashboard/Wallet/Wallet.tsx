import { Col, Row } from "antd";
import WalletSurvey from "../../../component/Wallets/WalletSurvey/WalletSurvey";
import WalletChart from "../../../component/Wallets/WalletChart/WalletChart";
import WalletActivity from "../../../component/Wallets/WalletActivity/WalletActivity";

export default function Wallet() {
  return (
    <div className="h-screen ">
      <WalletSurvey />
      <Row gutter={16}>
        <Col lg={12}>
          <WalletChart />
        </Col>
        <Col lg={12}>
          <WalletActivity />
        </Col>
      </Row>
    </div>
  );
}
