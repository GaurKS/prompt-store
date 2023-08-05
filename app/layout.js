import Nav from '@components/Nav'
import '@styles/global.css'

export const metadata = {
  title: 'Prompt-Store',
  description: 'Discover and Share AI prompts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav></Nav>
          {children}
        </main>
      </body>
    </html>
  )
}
