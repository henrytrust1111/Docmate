import { Title } from "./AppComponents";
export function PageFrame({
  over,
  title,
  text,
  children
}) {
  return <>
      <section className="inner-hero">
        <div className="container">
          <Title over={over} title={title} text={text} />
        </div>
      </section>
      <section className="section">
        <div className="container">{children}</div>
      </section>
    </>;
}
