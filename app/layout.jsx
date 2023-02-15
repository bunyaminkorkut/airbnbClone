import '../styles/globals.css'
export default function RootLayout({ children }) {
    return (
      <html>
        <head />
        <body className="bg-white text-black ">
          {children}
        </body>
      </html>
    )
  }
  