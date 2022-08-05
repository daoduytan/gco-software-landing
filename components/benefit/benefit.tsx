import cn from 'classnames';
import Image from 'next/image';
import { useActiveNumber } from '../../hooks/useActiveNumber';
import { ButtonScroll } from '../button-scroll';
import { Container, Title } from '../ui';

import s from './benefit.module.scss';

const lists: Array<{ icon: string; title: string; description: string }> = [
  {
    icon: '/benefit-1.png',
    title: 'Tối ưu chi phí',
    description:
      'Website hoạt động ổn định, không tốn quá nhiều chi phí bảo trì, lỗi bảo mật, lỗi hệ thống,...',
  },
  {
    icon: '/benefit-2.png',
    title: 'Định hướng nội dung rõ ràng',
    description:
      'Hệ thống CMS cho phép bạn xây dựng một trang web dễ sử dụng và tùy chỉnh một cách tự do',
  },
  {
    icon: '/benefit-3.png',
    title: 'Nâng tầm nhận diện thương hiệu',
    description:
      'Tìm kiếm ý tưởng, xây dựng và phát họa đáp ứng với nhu cầu và phù hợp với thị trường',
  },
  {
    icon: '/benefit-4.png',
    title: 'Thúc đẩy doanh số bán hàng',
    description:
      'Tìm kiếm ý tưởng, xây dựng và phát họa đáp ứng với nhu cầu và phù hợp với thị trường',
  },
  {
    icon: '/benefit-5.png',
    title: 'Tối ưu trả nghiệm khách hàng',
    description: 'Tốc độ tải trang siêu nhanh, gấp 10 lần website thông thường',
  },
];

const BenefitList = () => {
  const activeNumber = useActiveNumber(lists, 7000);
  return (
    <ul className="grid gap-4">
      {lists.map((item, index) => {
        // const isActive = activeNumber === index;
        const isActive = false;
        const className = cn(
          'rounded-lg px-6 py-10 flex flex-col lg:flex-row transition-all items-center justify-center gap-5 md:gap-8',
          {
            'scale-105': isActive,
            'bg-white': !isActive,
            'bg-blue-600': isActive,
            'text-white': isActive,
          }
        );

        return (
          <li
            data-aos="fade-up"
            data-aos-deley={index * 150}
            key={item.title}
            className={className}
          >
            <div className="flex-shrink-0">
              <Image
                src={item.icon}
                width="70px"
                height="70px"
                alt={item.title}
              />
            </div>
            <div className="grid gap-2 text-center lg:text-left">
              <span className="text-xl">{item.title}</span>
              <p>{item.description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const Benefit = () => {
  return (
    <Container>
      <div className={s.benefit} data-aos="fade-up">
        <div className="text-center">
          <Title title="Lợi ích chúng tôi mang đến cho bạn"></Title>
        </div>
        <div className="overflow-hidden grid md:grid-cols-8 justify-end items-end">
          <div className="col-span-2 hidden lg:block" data-aos="fade-right">
            <img src="/male1.svg" alt="" />
          </div>
          <div className="col-span-4 px-2 mx-auto">
            <BenefitList />
          </div>
          <div className="col-span-2 hidden lg:block" data-aos="fade-left">
            <img src="/female1.svg" alt="" />
          </div>
        </div>

        <div className="text-center mt-4" data-aos="fade-up">
          <ButtonScroll />
        </div>
      </div>
    </Container>
  );
};

export { Benefit };
