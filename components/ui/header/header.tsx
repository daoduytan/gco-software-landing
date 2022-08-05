import { Container } from '../container';
import { Logo } from '../logo';

const Header = () => {
  return (
    <header className="w-full">
      <Container>
        <div className="flex justify-between py-8">
          <Logo />
        </div>
      </Container>
    </header>
  );
};

export { Header };
