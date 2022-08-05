import Image from 'next/image';
import { TAboutListItem } from '../../lib/db';
import { FormContact } from '../form-contact/form-contact';
import { Container } from '../ui';
import { WrapForm } from '../wrap-form';
import s from './about.module.scss';

interface BoxProps {
  item: TAboutListItem;
}

const Box = ({ item }: BoxProps) => {
  return (
    <div className={s.aboutItem}>
      <span className={s.number}>{item.title}</span>
      <span>{item.description}</span>
    </div>
  );
};

interface Props {
  title: string;
  description: string;
  items: TAboutListItem[];
}

const About = ({ title, description, items }: Props) => {
  return (
    <Container>
      <div className="grid md:grid-cols-12 gap-16 md:gap-10 items-center">
        <div className="md:col-span-6 lg:col-span-7">
          <div className="grid md:grid-cols-12 lg:col-span-7 relative">
            <div className="grid gap-8 md:col-span-12 lg:col-span-7">
              <div className={s.aboutContent}>
                <h1 data-aos="slide-up">{title}</h1>
                <p data-aos="slide-up" data-aos-delay="150">
                  {description}
                </p>
              </div>

              <div className={s.aboutItems}>
                {items.map((item, index) => {
                  const className = index === 2 ? 'col-span-2' : '';
                  return (
                    <div
                      className={className}
                      key={item.title}
                      data-aos="slide-up"
                      data-aos-delay={150 * index}
                    >
                      <Box item={item} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="hidden lg:block absolute -bottom-10 -right-5">
              <Image
                data-aos="slide-up"
                src="/vector-hero.png"
                width="420px"
                height="274px"
                alt=""
              />
            </div>
          </div>
        </div>

        <div
          data-aos="slide-up"
          className="md:col-span-6 lg:col-span-5 flex items-center justify-center"
        >
          <WrapForm>
            <FormContact type="header" />
          </WrapForm>
        </div>
      </div>
    </Container>
  );
};
export { About };
