import { Container } from "../container";
import { Logo } from "../logo";

const Header = () => {
  return (
    <header className="w-full">
      <Container>
        <div className="flex justify-between">
          <Logo />
          <nav>Menu</nav>
        </div>
      </Container>
    </header>
  );
};

export { Header };
