import '@/scss/fonts.scss';
import '@/scss/reset.scss';

export const metadata = {
  title: {
    template: "%s | SwapHub",
    default: "SwapHub"
  },
  description: "SwapHub is a little community where you can trade your old stuff with others",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}