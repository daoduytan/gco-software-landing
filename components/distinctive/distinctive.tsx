import { ButtonScroll } from '../button-scroll';
import { Modal } from '../modal';
import { Container, Section, Title } from '../ui';
import s from './distinctive.module.scss';

const Distinctive = () => {
  return (
    <Section>
      <Container>
        <div data-aos="fade-up" className={s.distinctive}>
          <div className="bg-white px-6 md:px-10 lg:px-28 py-20 rounded-3xl">
            <div data-aos="fade-up" className="text-center mb-16">
              <Title lg title="Thứ mang lại khác biệt"></Title>
            </div>
            <div className="grid gap-28 md:gap-16 text-center md:text-left">
              <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-16 lg:gap-36 items-center ">
                <div className="flex-1" data-aos="fade-up">
                  <img src="/distinctive1.svg" alt="" />
                </div>
                <div className="flex-1" data-aos="fade-up">
                  <h4 className="text-3xl mb-4">JAMstacks</h4>
                  <p>
                    Phương pháp phát triển web nhằm mục đích thực thi hiệu suất
                    tốt hơn, mức độ bảo mật cao hơn, với chi phí mở rộng thấp và
                    mang đến trải nghiệm tốt hơn cho nhà phát triển.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-36 items-center">
                <div className="flex-1" data-aos="fade-up">
                  <img src="/distinctive2.svg" alt="" />
                </div>
                <div className="flex-1">
                  <h4 className="text-3xl mb-4" data-aos="fade-up">
                    Cách JAMstack
                    <br /> hỗ trợ hoạt động của bạn
                  </h4>
                  <ul className="list-disc list-inside" data-aos="fade-up">
                    <li>Tối ưu trong quá trình vận hành trang web</li>
                    <li>Nâng cao khả năng cạnh tranh</li>
                    <li>Gia tăng tỷ lệ chuyển đổi</li>
                  </ul>
                  <p></p>
                </div>
              </div>

              <div className="text-center" data-aos="fade-up">
                <ButtonScroll href="#" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export { Distinctive };
