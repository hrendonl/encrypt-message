import './Home.css';
import { Content } from "../../components/Content";
import { Header } from "../../components/Header";

export const Home = () => {
  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
};
