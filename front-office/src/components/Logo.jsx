import Link from 'next/link';
import Image from 'next/image';
import logoUni from '../images/logounivers.png';
const Logo = () => {
  return (
    <Link href='/'>
      <Image src={logoUni} width={40} height={40} alt='logo univers' />
    </Link>
  );
};

export default Logo;
