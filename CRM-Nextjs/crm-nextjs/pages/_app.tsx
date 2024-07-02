import '../styles/globals.css';
import { AppProps } from 'next/app';
import Sidebar from '../components/Sidebar';
import CommandBar from '../components/Client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <CommandBar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
