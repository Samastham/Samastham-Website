import { cn } from "../../lib/utils"
import ayuraLogo from "../../assets/ayura/logo-icon-teal.png"

interface BrandAyuraProps {
    className?: string
    gradient?: boolean
    showIcon?: boolean
    iconSize?: string
}

export function BrandAyura({ className, gradient = true, showIcon = false, iconSize = "h-8" }: BrandAyuraProps) {
    return (
        <span className={cn(
            "font-black tracking-tighter uppercase inline-flex items-center gap-2",
            gradient ? "bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600" : "text-current",
            className
        )}>
            {showIcon && <img src={ayuraLogo} alt="" className={cn("w-auto", iconSize)} />}
            Ayura
        </span>
    )
}
