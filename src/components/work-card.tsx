export default function WorkCard({ children }: { children: any }) {
    return (
        <div className="w-full max-w-[400px] h-[200px] mx-1 my-1 p-5 bg-neutral-900 snap-start rounded-2xl border-[1px] border-neutral-600">
            {children}
        </div>
    );
}