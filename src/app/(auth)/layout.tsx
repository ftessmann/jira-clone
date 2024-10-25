"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    const router = useRouter();
    const pathname = usePathname();
    
    const [isSignUpPage, setIsSignUpPage] = useState(pathname === "/sign-up");

    // função que atualiza a rota e força a atualização do pathname
    const handleButtonClick = () => {
        const targetRoute = isSignUpPage ? "/sign-in" : "/sign-up";
        router.push(targetRoute);
        setIsSignUpPage(!isSignUpPage); // atualiza o estado manualmente
    };

    useEffect(() => {
        setIsSignUpPage(pathname === "/sign-up");
    }, [pathname]);

    return (
        <main className="bg-neutral-100 min-h-screen">
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex justify-between items-center">
                    <Image 
                        src="/logo.svg"
                        height={56}
                        width={152}
                        alt="Logo"
                    />
                    <Button 
                        variant="secondary"
                        onClick={handleButtonClick}
                    >
                        {isSignUpPage ? "Login" : "Sign Up"}
                    </Button>
                </nav>
                <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
                    {children}
                </div>
            </div>
        </main>
    );
};

export default AuthLayout;