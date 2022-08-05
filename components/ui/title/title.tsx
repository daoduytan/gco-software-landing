import cls from 'classnames';

interface Props {
  title: string;
  lg?: boolean;
}

export const Title = ({ title, lg }: Props) => {
  return (
    <h3
      className={cls('font-bold', {
        'text-5xl': lg,
        'text-3xl': !lg,
      })}
    >
      {title}
    </h3>
  );
};
