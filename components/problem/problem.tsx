import cn from 'classnames';
import { useActiveNumber } from '../../hooks/useActiveNumber';
import { Container, Section, Title } from '../ui';

const ProblemIcon = () => {
  return (
    <img alt="" src="close.png" className="hidden md:inline-block w-3 md:w-5" />
  );
};

const lists: Array<string> = [
  'SEO không lên top',
  'Không có khách hàng',
  'Chi phí cao',
  'Không nhận diện được thương hiệu',
  'Cạnh tranh kém',
  'Nội dung sai',
  'Chăm sóc khách hàng chậm',
  '..............',
];

const ProblemList = () => {
  return (
    <ul className="grid grid-cols-2 md:inline-block gap-4 md:gap-2 md:text-center">
      {lists.map((item, index) => {
        const isActive = false;
        const className = cn(
          'cursor-pointer transition-all delay-100 grid md:inline-flex md:m-2.5 rounded bg-slate-100 px-4 py-4 md:py-4 md:px-6 text-xl gap-5 items-center hover:scale-110 hover:bg-blueapp hover:text-white',
          {
            'bg-blueapp': isActive,
            'scale-110': isActive,
            'shadow-blue-200': isActive,
            'shadow-xl': isActive,
            'text-white': isActive,
          }
        );
        return (
          <li
            key={item}
            data-aos="zoom-in"
            className="cursor-pointer transition-all delay-100 grid md:inline-flex md:m-2.5 rounded bg-slate-100 px-4 py-4 md:py-4 md:px-6 text-xl gap-5 items-center hover:scale-110 hover:bg-blueapp hover:text-white"
            data-aos-delay={150 * index}
          >
            <ProblemIcon />
            <span>{item}</span>
          </li>
        );
      })}
    </ul>
  );
};

const Problem = () => {
  return (
    <Section>
      <Container>
        <div className="md:px-8 py-10 lg:py-20 relative" data-aos="fade-up">
          <div className="relative z-10">
            <div className="text-center md:max-w-2xl mb-10 mx-auto">
              <Title title="Phần lớn khách hàng của chúng tôi đều gặp qua các vấn đề" />
            </div>

            <div className="md:max-w-5xl mx-auto grid md:grid-cols-6 justify-end items-end">
              <div data-aos="fade-right" className="hidden md:block">
                <img className="mx-auto" src="/male.svg" alt="da" />
              </div>

              <div className="md:col-span-4">
                <ProblemList />
              </div>
              <div data-aos="fade-left" className="hidden md:block">
                <img src="/female.svg" alt="da" className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export { Problem };
