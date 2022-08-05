const menus: Array<{ to: string; label: string }> = [
  {
    to: 'about',
    label: 'Về chúng tôi',
  },
  {
    to: 'job',
    label: 'Tuyển dụng',
  },
  {
    to: 'blog',
    label: 'Blog',
  },
  {
    to: 'contact',
    label: 'Liên hệ',
  },
];

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-8">
        {menus.map((item) => {
          if (item.to === 'contact') {
            return (
              <li key={item.to}>
                <a className="bg-blueapp text-white px-6 py-3 rounded hover:bg-blue-500">
                  {item.label}
                </a>
              </li>
            );
          }
          return (
            <li key={item.to}>
              <a className="font-semibold hover:text-blueapp">{item.label}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { Nav };
