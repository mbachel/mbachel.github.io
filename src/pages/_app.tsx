"use client";
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import "../app/globals.css";
import NavbarDesktop from '@/components/NavbarDesktop';
import NavbarMobile from '@/components/NavbarMobile';
import Hero from '@/components/Hero';
import MiniHero from '@/components/MiniHero';
import FooterDesktop from '@/components/FooterDesktop';
import FooterMobile from '@/components/FooterMobile';
import Providers from '@/components/Providers';

export default function MyApp({ Component, pageProps }: AppProps) {
  const pathname = usePathname();

  return (
    <Providers>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="hidden md:block">
        <NavbarDesktop />
      </div>
      <div className="block md:hidden">
        <NavbarMobile />
      </div>
      <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {pathname === "/" 
                ? <Hero /> 
                : <MiniHero />
            }

            <main className="m-auto w-full max-w-6xl bg-(--primary-background) shadow-lg">
              
                  <Component {...pageProps} />
            </main>
            </motion.div>
        </AnimatePresence>
      <div className="hidden md:block">
        <FooterDesktop />
      </div>
      <div className="block md:hidden">
        <FooterMobile />
      </div>
    </Providers>
  );
}