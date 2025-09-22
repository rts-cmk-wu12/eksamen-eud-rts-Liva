import '@/scss/fonts.scss';
import '@/scss/reset.scss';

export const metadata = {
  title: {
    template: "%s | SwapHub",
    default: "SwapHub"
  },
  description: "SwapHub er et lille fællesskab hvor du får muligheden til at bytte dine gamle ting med andre",
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