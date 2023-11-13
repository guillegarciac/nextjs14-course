import '../about.css'

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      <header>This is the about header</header>
      {children}
    </body>
  )
}