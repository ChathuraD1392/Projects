import "./Title.css";

interface Props {
  subtitle: string;
  title: string;
}

const Title = ({ subtitle, title }: Props) => {
  return (
    <>
      <div className="title">
        <p>{subtitle}</p>
        <h2>{title}</h2>
      </div>
    </>
  );
};

export default Title;
