import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <div className="border-black/10 border-b h-[40px] flex items-center justify-between px-5">
                <div>
                    FreeAPI
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/">Github</Link>
                </div>
        </div>
    );
}