import Image from "next/image";
type testimonialProps = {
  testimony: string,
  name: string,
  image:StaticImageData,
  occupation: string,
};

export default function TestimonialCard({
  testimony,
  name,
  occupation,
}: testimonialProps) {
  return <div className="verified_card">
    <p>{testimony} </p>
    <div>
        <Image src={image} alt="Testimonial Image" />
        <div>
            <h4>{name}</h4>
            <p>{occupation}</p>
        </div>
    </div>
  </div>;
}
