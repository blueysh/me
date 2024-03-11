export default function Footer() {
    return (
        <footer className="py-5 flex flex-row justify-center space-x-5 border-t-[1px] border-neutral-700">
            <h3 className="max-sm:text-sm my-auto">The end.</h3>
            <h3 className="opacity-50  my-auto">|</h3>
            <a href="https://l.blueysh.me/x" className="hover:underline hover:underline-offset-4 my-auto"><h3 className="max-sm:text-sm">X</h3></a>
            <a href="https://l.blueysh.me/discord" className="hover:underline hover:underline-offset-4 my-auto"><h3 className="max-sm:text-sm">Discord</h3></a>
            <a href="mailto:hi@blueysh.me" className="hover:underline hover:underline-offset-4 my-auto"><h3 className="max-sm:text-sm">Email</h3></a>
            <h3 className="opacity-50 my-auto">|</h3>
            <h3 className="max-sm:text-sm my-auto">© {new Date().getFullYear()} blueysh.</h3>
        </footer>
    );
}