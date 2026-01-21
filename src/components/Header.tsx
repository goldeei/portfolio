import Link from 'next/link';

export const Header = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <Link href="/">Jake Goldfarb</Link>
      <ul className="flex gap-4">
        <li>
          <Link href="#">Resume</Link>
        </li>
        <li>
          <Link href="#">Mail Me</Link>
        </li>
        <li>
          <Link href="#">GitHub</Link>
        </li>
        <li>
          <Link href="#">LinkedIn</Link>
        </li>
      </ul>
    </nav>
  );
};
