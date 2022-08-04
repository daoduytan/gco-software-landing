import { Container, Section } from "../ui";

interface Props {
  title: string;
  description: string;
}

const About = ({ title, description }: Props) => {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-2">
          <div>
            <h1>{title}</h1>
            <p>{description}</p>

            <div className="grid grid-cols-3">
              <div>1</div>
              <div>1</div>
              <div>1</div>
            </div>
          </div>
          <div>form</div>
        </div>
      </Container>
    </Section>
  );
};
export { About };
