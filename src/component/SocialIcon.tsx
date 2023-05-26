type Props = {
  href: string;
  children: React.ReactNode;
};

function SocialIcon({ href, children }: Props) {
  return (
    <a href={href} target="_blank" className="text-tertiary hover:text-primary">
      {children}
    </a>
  );
}
export default SocialIcon;
