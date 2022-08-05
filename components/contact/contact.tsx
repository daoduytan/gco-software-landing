import Image from 'next/image';
import { FormContact } from '../form-contact';
import { Container, Section } from '../ui';
import { WrapForm } from '../wrap-form';
import s from './contact.module.scss';

const Contact = () => {
  return (
    <div id="contact" className={s.contact}>
      <div className="relative py-10">
        <div className="absolute bottom-0 left-0">
          <Image
            width="584px"
            height="389px"
            src="/vector-footer-1.png"
            alt=""
          />
        </div>
        <Section>
          <Container>
            <div className="relative z-10">
              <div
                data-aos="slide-up"
                className="flex justify-center items-center"
              >
                <WrapForm>
                  <FormContact
                    type="footer"
                    description="Đưa dự án hiện tại của bạn lên cấp độ tiếp theo"
                    title="Bạn đã sẵn sẵn sàng?"
                  />
                </WrapForm>
              </div>
              <div className="absolute hidden lg:block -right-10 bottom-0">
                <Image
                  src="/vector-footer-2.png"
                  alt=""
                  width="376px"
                  height="376px"
                />
              </div>
            </div>
          </Container>
        </Section>
      </div>
    </div>
  );
};

export { Contact };
