import Link from "next/link"

const NavLinks = () => {
  return (
    <>
         <Link href="/">Home</Link>
          <Link href="/about">About us</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
    </>
  )
}

export default NavLinks