import './globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Inter } from 'next/font/google'
import { ApolloWrapper } from "../lab/apollo-provider";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Toptech task',
  description: 'Next js with graphql',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>
          {children}
        </ApolloWrapper>
      </body>
    </html>
  )
}
