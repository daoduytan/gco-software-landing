interface Props {
  title?: string;
  href?: string;
}

export const ButtonScroll = ({
  title = 'Đăng ký tư vấn',
  href = '#contact',
}: Props) => {
  return (
    <a
      href={href}
      className="bg-yellow-500 shadow-lg shadow-yellow-200 rounded-lg px-8 py-4 hover:bg-yellow-400 shadow-yellow-300"
    >
      {title}
    </a>
  );
};
