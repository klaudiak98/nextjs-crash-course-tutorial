import Image from 'next/image';
import Link from 'next/link';
import Logo from './logo.png';

export default function Navbar() {
  return (
        <nav>
            <Image
                src={Logo}
                alt='Helpdesk Logo'
                width={70}
                quality={100}
                placeholder='blur'
            />
            <h1>Helpdesk</h1>
            <Link href='/'>Home</Link>
            <Link href='/tickets'>Tickets</Link>
        </nav>
    )
}
