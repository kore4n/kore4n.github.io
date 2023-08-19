import EmailIcon from "@/components/Icons/EmailIcon";
import GitHubIcon from "@/components/Icons/GitHubIcon";
import LinkedinIcon from "@/components/Icons/LinkedinIcon";

export default function Footer() {
    const iconClasses = " fill-white transition hover:scale-125 hover:fill-cyan-400 duration-100"

  return (
    <footer className=" min-h-[50px] flex justify-center items-center py-6 opacity-80 gap-10 bg-gradient-to-r from-gray-700 to-gray-800">
        <GitHubIcon classes={iconClasses} />
        <LinkedinIcon classes={iconClasses} />
        <EmailIcon classes={iconClasses} />
    </footer>
  )
}
