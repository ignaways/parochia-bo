import NavLinks from "./Nav-links";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex p-10">
            <div className="flex-none w-28 h-16"> <NavLinks /> </div>       
            <div className="flex-grow h-16">  {children} </div>
        </div>
    );
}