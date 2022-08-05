import cn from 'classnames';
import Aos from 'aos';
import 'aos/dist/aos.css';
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import Head from 'next/head';
import { ReactNode, useEffect, useState } from 'react';
import {
  About,
  Benefit,
  Contact,
  Distinctive,
  Feedback,
  Header,
  Modal,
  Problem,
} from '../components';

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

interface BgAnimatedProps {
  children: ReactNode;
}

const BgAnimated = ({ children }: BgAnimatedProps) => {
  return (
    <div className="bg">
      {children}

      <style jsx>{`
        .bg {
          background: url('/bg-hero.jpg') center;
          background-size: cover;
        }
      `}</style>
    </div>
  );
};

const Home: NextPage = ({ about }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: 'ease-in-out',
    });
  }, []);

  const closeModal = () => {
    setIsOpenModal(false);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsOpenModal(false);
    }, 5000);
    () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className={cn('', {
        'h-screen': isOpenModal,
        'overflow-hidden': isOpenModal,
      })}
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BgAnimated>
        <div className="pb-24">
          <Header />

          <About
            items={about.items}
            description={about.description}
            title={about.title}
          />
        </div>
      </BgAnimated>

      <Problem />
      <Benefit />
      <Distinctive />
      <Feedback />
      <Contact />
      <Modal open={isOpenModal} closeModal={closeModal} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      about: {
        title: 'Về chúng tôi',
        description:
          'Mang lại hành động chuyển đổi số với khách hàng của bạn một cách hiệu quả.',
        items: [
          {
            title: '10+',
            description: 'Năm hoạt động',
          },
          {
            title: '80%',
            description: 'Tăng trưởng doanh số',
          },
          {
            title: '200+',
            description: 'Website đã xây dựng',
          },
        ],
      },
    },
  };
};

export default Home;
