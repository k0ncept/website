import Image from "next/image";

export default function Logo({ className = "", size = "default" }) {
  const sizeClasses = {
    small: "w-6 h-6",
    default: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16",
    xlarge: "w-24 h-24",
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <Image
        src="/glitch-star.png"
        alt="Glitch Star Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
