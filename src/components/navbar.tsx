import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();

    return (
        <div className="flex flex-row space-x-2 py-2 mx-auto bg-neutral-500 bg-opacity-50 backdrop-blur-md border-[1px] border-neutral-500 rounded-full max-w-[305px] justify-center sticky bottom-5 mb-2">
            <NavbarItem href="/" label="Home" selected={router.pathname === '/'} />
            <NavbarItem href="/about" label="About" selected={router.pathname.startsWith('/about')} />
            <NavbarItem href="/work" label="Work" selected={router.pathname.startsWith('/work')} />
        </div>
    );
}

function NavbarItem({ href, label, selected }: { href: string; label: string, selected: boolean }) {
    return (
        <div className={`rounded-full px-5 py-1 bg-neutral-500 border-[1px] border-neutral-400 ${selected ? "border-opacity-100" : "border-opacity-0"}`}>
            <a href={href}><p>{label}</p></a>
        </div>
    );
}