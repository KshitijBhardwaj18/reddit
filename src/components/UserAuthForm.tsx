"use client";

import { FC } from "react";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {signIn} from "next-auth/react"
import { Icons } from "./Icons";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({className, ...props}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const loginWithGoogle = async () => {
        setIsLoading(true)

        try{
            await signIn('google')
        }catch (error) {

        }finally{
            setIsLoading(false)
        }
    }
  return (
    <div className={cn("flex justify-center", className)} {...props}>
      <Button onClick={loginWithGoogle} isLoading={isLoading}>
        {isLoading ? null : <Icons.google className="h-4 w-4"/>}
        Google</Button>
    </div>
  );
};

export default UserAuthForm;
