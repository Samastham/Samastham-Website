import { cn } from "../../lib/utils"
import ayuraIcon from "../../assets/ayura/ayura-icon.svg"
import ayuraName from "../../assets/ayura/ayura-name.svg"
import ayuraFull from "../../assets/ayura/ayura-full-logo.svg"
import ayuraIconWhite from "../../assets/ayura/ayura-icon-white.svg"
import ayuraNameWhite from "../../assets/ayura/ayura-name-white.svg"
import ayuraFullWhite from "../../assets/ayura/ayura-full-logo-white.svg"

interface BrandAyuraProps {
    className?: string
    variant?: "teal" | "white"
    type?: "icon" | "name" | "full"
    size?: string
}

export function BrandAyura({ 
    className, 
    variant = "teal", 
    type = "full", 
    size = "h-8" 
}: BrandAyuraProps) {
    let src = ""
    
    if (variant === "white") {
        if (type === "icon") src = ayuraIconWhite
        else if (type === "name") src = ayuraNameWhite
        else src = ayuraFullWhite
    } else {
        if (type === "icon") src = ayuraIcon
        else if (type === "name") src = ayuraName
        else src = ayuraFull
    }
    
    return (
        <span className={cn("inline-flex items-center", className)}>
            <img 
                src={src} 
                alt="Ayura" 
                className={cn("w-auto", size)} 
            />
        </span>
    )
}
