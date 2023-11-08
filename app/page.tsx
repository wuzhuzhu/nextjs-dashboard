import AcmeLogo from '@/app/ui/acme-logo';
import { lusitana, notoSansSC } from '@/app/ui/fonts';
import styles from '@/app/ui/home.module.css';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import heroPicDesktop from '../public/hero-desktop.png';
import heroPicMobile from '../public/hero-mobile.png';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div
            className={styles.shape}
          />
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <p className={clsx(
            "text-xl text-gray-800 antialiased",
            notoSansSC.className,
          )}>
            这是一段中文的文字,我希望他使用Noto Sans SC字体
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src={heroPicMobile}
            // width={500}
            // height={620}
            priority
            className='block md:hidden'
            alt='sceeneshot of the dashboard project showing destop and mobile versions'
          />
          <Image
            src={heroPicDesktop}
            placeholder='blur'
            // width={1000}
            // height={760}
            priority
            className='hidden md:block'
            alt='sceeneshot of the dashboard project showing destop and mobile versions'
          />
        </div>
      </div>
    </main>
  );
}
