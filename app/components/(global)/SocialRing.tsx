type linkProps = {
  icon: React.ReactNode;
  link: string;
};

export default function SocialRing({ icon, link }: linkProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="p-2 border border-white rouded-full text-white w-fit rounded-full">
        {icon}
      </div>
    </a>
  );
}
