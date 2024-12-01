import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Signin Page",
  description: "for signing in",
};

export default function({children}:{
  children:React.ReactNode
}) {
  return (<div>
        
        {children}
        </div>
  );
}
