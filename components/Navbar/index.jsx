import Link from "next/link"
import Image from "next/image"
import { Header, List, ListItem, Logo } from "./navbar.style"

export const Navbar = () => {

    return (
        <Header>
            <Link href="/">
                <Logo src="/logo.png" />
            </Link>
            <List>
                <ListItem><Link href="/">Home</Link></ListItem>
                <ListItem><Link href="/about">About</Link></ListItem>
            </List>
        </Header>
    )
}
