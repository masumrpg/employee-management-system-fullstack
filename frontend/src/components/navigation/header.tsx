import Link from "next/link";
import {Package2Icon, SearchIcon} from "lucide-react";
import {Input} from "@/components/ui/input";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import ModeToggle from "@/components/mode-toggle";
import Image from "next/image";
import { toast } from "sonner";
import signOutAction  from "@/action/signOutAction";

export default function Header() {
    const handleSignout = async () => {
        const error = await signOutAction();
        if (error) {
            toast.error(error.error);
        } else {
            toast.success("Signout success");
        }
    };
    return (
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <Link className="lg:hidden" href="#">
                <Package2Icon className="h-6 w-6"/>
                <span className="sr-only">Home</span>
            </Link>
            {/* <div className="w-full flex-1">
                <form>
                    <div className="relative">
                        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400"/>
                        <Input
                            className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                            placeholder="Search employees..."
                            type="search"
                        />
                    </div>
                </form>
            </div> */}
            <ModeToggle/>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                        size="icon"
                        variant="ghost"
                    >
                        <Image
                            alt="Avatar"
                            className="rounded-full"
                            height="32"
                            src="https://github.com/shadcn.png"
                            style={{
                                aspectRatio: "32/32",
                                objectFit: "cover"
                            }}
                            width="32"
                        />
                        <span className="sr-only">Toggle user menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">Support</DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem onClick={handleSignout} className="cursor-pointer">Signout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    );
}